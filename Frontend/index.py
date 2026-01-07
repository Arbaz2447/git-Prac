import streamlit as st
import time

# ------------------ Page Config ------------------
st.set_page_config(
    page_title="SmartLearn",
    page_icon="🎓",
    layout="wide"
)


# ------------------ Routing ------------------
query_params = st.query_params
view = query_params.get("view", "main")

# ------------------ BOT VIEW ------------------
if view == "bot":
    try:
        exec(open("bot.py").read())
        st.stop()
    except FileNotFoundError:
        st.error("bot.py not found in the project directory.")
        st.stop()

# ------------------ Session State ------------------
if "selected_course" not in st.session_state:
    st.session_state.selected_course = None

# ------------------ Header ------------------
st.markdown(
    """
    <h1 style="text-align:center;">🎓 SmartLearn</h1>
    <p style="text-align:center;color:gray;">
        Structured learning • Clear workflows • Transparent assessments
    </p>
    """,
    unsafe_allow_html=True
)

st.divider()

# ------------------ COURSE DATA ------------------
courses = {
    "Full Stack Web Development": {
        "desc": "Learn front-end and back-end workflows of modern web apps.",
        "modules": ["Web Fundamentals", "Front-End Development", "Back-End Development"],
        "progress": 42
    },
    "Data Structures & Algorithms": {
        "desc": "Understand how data is organized and processed efficiently.",
        "modules": ["Foundations", "Linear Structures", "Trees & Graphs"],
        "progress": 30
    },
    "Python for Beginners": {
        "desc": "Start programming with Python and basic software concepts.",
        "modules": ["Python Basics", "Functions & Modules"],
        "progress": 65
    },
    "Introduction to Cloud Computing": {
        "desc": "Understand cloud models, services, and deployments.",
        "modules": ["Cloud Fundamentals", "Deployment Models"],
        "progress": 20
    }
}

# ------------------ COURSE GRID VIEW ------------------
if st.session_state.selected_course is None:
    st.subheader("📚 Available Courses")

    col1, col2 = st.columns(2)
    course_items = list(courses.items())

    for i, (name, data) in enumerate(course_items):
        with (col1 if i % 2 == 0 else col2):
            with st.container(border=True):
                st.markdown(f"### {name}")
                st.caption(data["desc"])
                st.progress(data["progress"])
                st.caption(f"Progress: {data['progress']}%")

                if st.button("View Course", key=name):
                    st.session_state.selected_course = name
                    st.rerun()

# ------------------ COURSE DETAIL VIEW ------------------
else:
    course = courses[st.session_state.selected_course]

    st.button("⬅ Back to Courses", on_click=lambda: st.session_state.update({"selected_course": None}))

    st.markdown(f"## {st.session_state.selected_course}")
    st.caption(course["desc"])

    st.progress(course["progress"])
    st.caption(f"Overall Progress: {course['progress']}%")

    st.divider()

    st.markdown("### 📦 Modules")

    for i, module in enumerate(course["modules"], start=1):
        with st.expander(f"Module {i}: {module}"):
            st.markdown("**Lessons**")
            st.write("• Lesson 1")
            st.write("• Lesson 2")
            st.write("• Lesson 3")

            col_a, col_b = st.columns(2)
            col_a.info("📘 Lessons Completed")
            col_b.warning("📝 Quiz Pending")

            if st.button("Mark Lesson as Viewed", key=f"{module}_lesson"):
                with st.spinner("Updating progress..."):
                    time.sleep(0.5)
                st.success("Lesson marked as completed (UI simulation)")

    st.divider()

    st.markdown("### 📝 Assessments")
    st.warning(
        "Each module has a mandatory quiz.\n"
        "Minimum pass score: 60%\n"
        "Maximum attempts: 3"
    )

    st.markdown("### 🏆 Certification")
    st.info(
        "Certificate will be auto-generated after:\n"
        "• All modules completed\n"
        "• All quizzes passed\n"
        "• Final assessment cleared"
    )

# ------------------ Floating BOT Button ------------------
st.markdown(
    """
    <style>
    .bot-button {
        position: fixed;
        bottom: 25px;
        right: 25px;
        background-color: #4CAF50;
        color: white;
        border-radius: 50%;
        width: 60px;
        height: 60px;
        font-size: 28px;
        text-align: center;
        line-height: 60px;
        cursor: pointer;
        z-index: 9999;
        box-shadow: 0 4px 12px rgba(0,0,0,0.3);
    }
    </style>

    <a href="?view=bot">
        <div class="bot-button">🤖</div>
    </a>
    """,
    unsafe_allow_html=True
)

# ------------------ Footer ------------------
st.divider()
st.caption(
    "SmartLearn UI Prototype • UI only • No assessment answers or tutoring provided"
)
