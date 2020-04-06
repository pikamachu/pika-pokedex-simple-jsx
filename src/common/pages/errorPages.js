const { mainLayout } = require('./mainLayout');

export const notFoundPage = labels =>
  mainLayout(
    <div class="container">
      <section class="mosaic section">
        <div class="column-6 push-2 full-height">
          <h1 class="page-main-title">Page not Found.</h1>
          <h2 class="subtitle-404">Lo sentimos, pero la página que buscas no está aquí.</h2>

          <div class="listview">
            <ul>
              <li>
                <a href="/">
                  <span class="icon icon_pokeball"></span>&nbsp;Return home
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div class="column-4 push-8">
          <img src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/025.png" alt="Pikachu" />
        </div>
      </section>
    </div>
  );
