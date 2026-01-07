import streamlit as st
import requests
import time

# ------------------ Page Config ------------------
# st.set_page_config(page_title="SmartLearn Bot", page_icon="🤖")
# ------------------ Page Config ------------------
st.set_page_config(
    page_title="SmartLearn Workflow Explainer",
    page_icon="🎓",
    layout="wide"
)

# ------------------ Custom Styling ------------------
st.markdown("""
    <style>
    .stChatMessage {
        border-radius: 15px;
        padding: 10px;
        margin-bottom: 10px;
    }
    </style>
""", unsafe_allow_html=True)

# ------------------ Title & Sidebar ------------------
st.title("🤖 SmartLearn AI Assistant")
st.caption("Ask questions about course structure, assessments, certification & progress")

with st.sidebar:
    st.title("Settings")
    if st.button("Clear Chat History"):
        st.session_state.messages = []
        st.rerun()

# ------------------ Initialize History ------------------
if "messages" not in st.session_state:
    st.session_state.messages = [
        {
            "role": "assistant",
            "content": "Hello! I can help explain course structure, assessments, progress, and certification."
        }
    ]

# ------------------ Display Chat History ------------------
for message in st.session_state.messages:
    with st.chat_message(message["role"]):
        st.markdown(message["content"])

# ------------------ Chat Input ------------------
if prompt := st.chat_input("Type your question here..."):

    # Show user message
    with st.chat_message("user"):
        st.markdown(prompt)

    st.session_state.messages.append(
        {"role": "user", "content": prompt}
    )

    # Call backend
    with st.chat_message("assistant"):
        placeholder = st.empty()

        try:
            response = requests.post(
                # "https://psychic-computing-machine-qrp7gq5xvgqh679w-5000.app.github.dev/ask",
                "https://hackathon-vcube.onrender.com/ask",
                json={"query": prompt},
                timeout=60
            )

            if response.status_code == 200:
                assistant_text = response.json().get("answer", "")
            else:
                assistant_text = "The server returned an error. Please try again later."

        except requests.exceptions.RequestException:
            assistant_text = "Unable to reach the backend service."

        # Thinking indicator (safe for UX)
        placeholder.markdown("_Thinking..._")
        time.sleep(0.4)

        # ✅ Final render with proper Markdown formatting
        placeholder.markdown(assistant_text)

    st.session_state.messages.append(
        {"role": "assistant", "content": assistant_text}
    )
