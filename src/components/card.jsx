import Buttons from "./buttons/button";

function Card() {
    return (
        <>
        <div class="card col-12 col-sm-6 col-lg-4">
                    <div class="card-body">
                        <h4 class="card-title">Aula de Streamlit</h4>
                        <img src="https://png.pngtree.com/thumb_back/fh260/background/20230705/pngtree-illustration-of-3d-rendered-laptop-computer-showcasing-the-concept-of-e-image_3752947.jpg" alt="" class="card-img-top"></img>
                        <p class="card-text">
                            Aprenda a criar aplicações web com Python e Streamlit. O curso é totalmente gratuito e online, com duração de 4 horas. Ao final do curso, você receberá um certificado de conclusão.
                        </p>
                        <Buttons variant = "btn btn-dark" valor="Acessar Curso" />
                    </div>
                </div>
        </>
    );
}

export default Card;