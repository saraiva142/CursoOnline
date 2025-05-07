function Menu() {
    return(
        <>
        <nav class="navbar navbar-dropdown-lg bg-body-tertiary">
        <div class="container-fluid">
            <a class="navbar-brand" href="#">SaraivaCursos</a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNavDropdown">
            <ul class="navbar-nav">
                <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="#">Home</a>
                </li>
                <li class="nav-item">
                <a class="nav-link" href="#">Cursos</a>
                </li>
                <li class="nav-item">
                <a class="nav-link" href="#">Depoimentos</a>
                </li>
                <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Sobre
                </a>
                <ul class="dropdown-menu">
                    <li><a class="dropdown-item" href="#">Professores</a></li>
                    <li><a class="dropdown-item" href="#">Material</a></li>
                    <li><a class="dropdown-item" href="#">Princípios</a></li>
                </ul>
                </li>
            </ul>
            </div>
        </div>
        </nav>
        </>
    );
}

export default Menu;