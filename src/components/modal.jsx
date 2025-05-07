function Modal() {
    return (
        <>
        <button type="button" class="btn btn-dark" data-bs-toggle="modal" data-bs-target="#exampleModal">
        Exemplo de Código Streamlit
        </button>

        <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
            <div class="modal-header">
                <h1 class="modal-title fs-5" id="exampleModalLabel">Form.py</h1>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
                import streamlit as st <br />
                with st.form("user_input_form"): <br />
                    name = st.text_input("Nome") <br />
                    email = st.text_input("Email") <br />
                    submit_button = st.form_submit_button("Enviar")
            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                <button type="button" class="btn btn-danger">Testar Código</button>
            </div>
            </div>
        </div>
        </div>
        </>
    );
}

export default Modal;   