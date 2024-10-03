let conteudoHeader = document.getElementById('header-content')

function onClick() {
    conteudoHeader.innerHTML = 
    `
    <header>
        <div class="menu">
            <img class="logo" src="https://www.gigabyte.com/FileUpload/Global/KeyFeature/1947/innergigabyteimages/eagle/16.png" alt="logo">
            <nav class="header-menu">
                <ul class="lista-menu">
                    <li><a href="#">Home</a></li>
                    <li><a href="#">Serviços</a></li>
                    <li><a href="#">Agendamento</a></li>
                    <li><a href="#">Contato</a></li>
                </ul>
            </nav>
        </div>
    </header>
    `
    conteudoHeader.classList.add('header')
}