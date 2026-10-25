import React, { Component } from 'react';

class Content extends Component {
  constructor(props) {
    super(props);
    // Ініціалізація стану для зміни кольорів при кліку (Завдання 1 з ЛР4)
    this.state = {
      isElem5Active: false,
      isElem6Active: false
    };
  }

  handleElem5Click = () => {
    this.setState((prevState) => ({ isElem5Active: !prevState.isElem5Active }));
  };

  handleElem6Click = () => {
    this.setState((prevState) => ({ isElem6Active: !prevState.isElem6Active }));
  };

  render() {
    // Стилі для зміни кольорів фон/текст
    const styleElem5 = {
      backgroundColor: this.state.isElem5Active ? '#2c3e50' : '',
      color: this.state.isElem5Active ? '#ffffff' : ''
    };

    const styleElem6 = {
      backgroundColor: this.state.isElem6Active ? '#e74c3c' : '',
      color: this.state.isElem6Active ? '#ffffff' : ''
    };

    return (
      <main className="main-content">
        <p id="elem-2">
          Народився в місті Житомир. З дитинства захоплююся точними науками, комп'ютерною технікою, розробкою програмного забезпечення та новинками в сфері відеоігор.
        </p>

        <p id="elem-3">
          Освіта: здобув загальну середню освіту в ліцеї №19 м. Житомира, який закінчив із золотою медаллю. Наразі навчаюся в Національному технічному університеті України «Київський політехнічний інститут імені Ігоря Сікорського» на факультеті інформатики та обчислювальної техніки (ФІОТ).
        </p>

        <div id="elem-4">
          <h3>Мої хобі:</h3>
          <ul>
            <li>
              <strong>Комп'ютерні відеоігри різних жанрів:</strong>
              <ul>
                <li>Souls-like / Action-Adventure: <em>Hollow Knight</em>, <em>God of War</em>, <em>God of War Ragnarök</em></li>
                <li>Survival-ігри (виживачі): <em>Valheim</em>, <em>Subnautica</em> та інші</li>
                <li>RPG: <em>The Witcher 3: Wild Hunt</em>, <em>Cyberpunk 2077</em></li>
              </ul>
            </li>
            <li>Програмування, проектування баз даних та веб-розробка</li>
            <li>Читання ранобе, манґи та корисної технічної літератури</li>
          </ul>
        </div>

        {/* Завдання 1 з ЛР4: getElementById (Елемент 5) */}
        <div
          id="elem-5"
          className="clickable-element"
          style={styleElem5}
          onClick={this.handleElem5Click}
        >
          <h3>Улюблені анімаційні серіали, аніме та ранобе (Клікніть мене - getElementById):</h3>
          <ol>
            <li>Анімаційні серіали: «Аватар: Легенда про Аанга» / «Легенда про Корру»</li>
            <li>Аніме-серіали: «Кіберпанк: Ті, що біжать по краю» (Cyberpunk: Edgerunners), «Зошит смерті» (Death Note), «Доктор Стоун» (Dr. Stone)</li>
            <li>Ранобе: «Реінкарнація безробітного» (Mushoku Tensei)</li>
          </ol>
        </div>

        {/* Завдання 1 з ЛР4: querySelector (Елемент 6) */}
        <h3
          id="elem-6"
          className="clickable-element element-6-target"
          style={styleElem6}
          onClick={this.handleElem6Click}
        >
          Улюблене місто (Клікніть мене - querySelector):
        </h3>

        <p id="elem-7">
          Житомир — рідне та одне з найзатишніших міст України з багатою історією, мальовничими парками, знаменитим підвісним мостом через річку Тетерів у парку Шодуара та спокійною гармонійною атмосферою.
        </p>
      </main>
    );
  }
}

export default Content;