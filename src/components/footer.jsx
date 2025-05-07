function Footer() {
    return (
        <>
        <footer className="bg-light text-dark py-4">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-md-6">
                        <h5 className="text-uppercase">SaraivaCursos</h5>
                        <p>
                            Rede de cursos online gratuitos. Aprenda a programar com Python, JavaScript, HTML e CSS. Cursos de qualidade com professores renomados do mercado.
                        </p>
                        <div>
                            <a href="#" className="text-dark me-3"><i className="fab fa-twitter"></i></a>
                            <a href="#" className="text-dark me-3"><i className="fab fa-facebook"></i></a>
                            <a href="#" className="text-dark me-3"><i className="fab fa-instagram"></i></a>
                            <a href="#" className="text-dark"><i className="fab fa-linkedin"></i></a>
                        </div>
                    </div>

                    <div className="col-md-6 text-md-end mt-3 mt-md-0">
                        <ul className="list-unstyled">
                            <li className="d-inline-block me-3"><a href="#" className="text-dark">Sobre</a></li>
                            <li className="d-inline-block me-3"><a href="#" className="text-dark">Serviços</a></li>
                            <li className="d-inline-block me-3"><a href="#" className="text-dark">Contato</a></li>
                            <li className="d-inline-block me-3"><a href="#" className="text-dark">Privacidade</a></li>
                            <li className="d-inline-block"><a href="#" className="text-dark">Termos</a></li>
                        </ul>
                    </div>
                </div>

                <div className="text-center mt-4">
                    <small>© 2024 SaraivaCursos. All rights reserved.</small>
                </div>
            </div>
        </footer>
        </>
    );
}

export default Footer;