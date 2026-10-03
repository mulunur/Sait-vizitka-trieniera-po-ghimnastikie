import { useState, type FormEvent, type ReactNode } from "react";
import {
  ArrowDownRight,
  ArrowUpRight,
  ChevronRight,
  Menu,
  MoveUpRight,
  Plus,
  X,
} from "lucide-react";

type ArchiveItem = {
  date: string;
  label: string;
  detail: ReactNode;
};

const practice = [
  {
    index: "01",
    title: "Индивидуальные занятия",
    copy: "Техника предмета, тело, выразительность и уверенность в собственной программе — в темпе, который подходит конкретной гимнастке.",
  },
  {
    index: "02",
    title: "Групповые занятия",
    copy: "Общая линия, синхронность, музыкальность и внимание к каждой роли внутри команды.",
  },
  {
    index: "03",
    title: "Постановка упражнений",
    copy: "От идеи и музыкального материала до структуры, которая раскрывает сильные стороны состава.",
  },
  {
    index: "04",
    title: "Судейская консультация",
    copy: "Спокойный профессиональный разбор: что уже работает, где теряются баллы и как усилить программу.",
  },
];

const archive: ArchiveItem[] = [
  {
    date: "1995",
    label: "Родилась в Пензе",
    detail: <>Дата и место рождения приводятся в открытой спортивной биографии. <strong>Перед публикацией на рабочем сайте — сверить с Дарьей.</strong></>,
  },
  {
    date: "Спорт",
    label: "Художественная гимнастика · групповые упражнения",
    detail: <>Спортивные публикации фиксируют выступления и подготовку в дисциплине групповых упражнений.</>,
  },
  {
    date: "Звание",
    label: "Мастер спорта России международного класса",
    detail: <>Звание указано в биографической публикации о Дарье как о спортсменке, тренере и хореографе.</>,
  },
  {
    date: "Результаты",
    label: "Абсолютная чемпионка Франции · призёр этапа Кубка мира",
    detail: <>В источниках перечислены чемпионство Франции, призовое место на этапе Кубка мира и результаты Всемирной Маккабиады.</>,
  },
  {
    date: "Образование",
    label: "ПГПУ им. В. Г. Белинского · РЭУ им. Г. В. Плеханова",
    detail: <>Открытая биографическая справка упоминает два высших образования — педагогическое и экономическое.</>,
  },
];

const assetPath = (filename: string) => `${import.meta.env.BASE_URL}videos/${filename}`;

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [expanded, setExpanded] = useState<string | null>(null);
  const [sent, setSent] = useState(false);

  function closeMenu() {
    setMenuOpen(false);
  }

  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSent(true);
  }

  return (
    <div className="ke-page" id="top">
      <header className="ke-nav">
        <a className="ke-brand" href="#top" onClick={closeMenu} aria-label="На главную">
          <span className="ke-brand-text">
            Дарья Каденкова
            <span>художественная гимнастика</span>
          </span>
        </a>
        <nav id="main-navigation" className={`ke-links ${menuOpen ? "ke-open" : ""}`} aria-label="Основная навигация">
          <a href="#biography" onClick={closeMenu}>Биография</a>
          <a href="#practice" onClick={closeMenu}>Практика</a>
          <a href="#sources" onClick={closeMenu}>Источники</a>
          <a className="ke-nav-cta" href="#contact" onClick={closeMenu}>Связаться</a>
        </nav>
        <button
          className="ke-menu"
          type="button"
          onClick={() => setMenuOpen((open) => !open)}
          aria-label={menuOpen ? "Закрыть меню" : "Открыть меню"}
          aria-expanded={menuOpen}
          aria-controls="main-navigation"
        >
          {menuOpen ? <X size={21} /> : <Menu size={21} />}
        </button>
      </header>

      <main>
        <section className="ke-hero ke-reveal" aria-labelledby="page-title">
          <div className="ke-hero-copy">
            <div className="ke-overline">Профиль специалиста · художественная гимнастика</div>
            <h1 id="page-title"><span className="ke-hero-name">Дарья</span> <em>Каденкова</em></h1>
            <p className="ke-hero-sub">Мастер спорта России международного класса. Тренер, хореограф и постановщик, работающий с движением как с точным языком.</p>
            <div className="ke-hero-actions">
              <a className="ke-primary" href="#contact">Обсудить задачу <ArrowUpRight size={15} /></a>
              <a className="ke-text-link" href="#biography">Открыть профиль</a>
            </div>
          </div>
          <div className="ke-hero-art" aria-label="Видео Дарьи Каденковой">
            <div className="ke-video">
              <video
                src={assetPath("daria-kadenkova-hero.mp4")}
                autoPlay
                muted
                loop
                playsInline
                controls
                poster={assetPath("daria-kadenkova-hero-poster.jpg")}
                preload="auto"
                aria-label="Видео Дарьи Каденковой"
              />
            </div>
          </div>
        </section>

        <section className="ke-credential-bar" aria-label="Ключевые сведения">
          <div className="ke-credential"><b>МСМК</b><span>Мастер спорта России международного класса</span></div>
          <div className="ke-credential"><b>Пенза</b><span>Город рождения и начало спортивного пути</span></div>
          <div className="ke-credential"><b>Группы</b><span>Соревновательный опыт в групповых упражнениях</span></div>
          <div className="ke-credential"><b>360°</b><span>Тренировки · постановка · судейский разбор</span></div>
        </section>

        <section className="ke-section" id="biography" aria-labelledby="biography-title">
          <div className="ke-section-label">01 / Биографическая справка</div>
          <h2 className="ke-section-title" id="biography-title">Опыт, который работает не только в архиве достижений.</h2>
          <div className="ke-intro-grid">
            <aside className="ke-archive-side">
              <h3>Профиль<br />в фактах.</h3>
              <p>Собран из открытых спортивных публикаций. Каждый пункт — основа для профессионального разговора, а не декоративная строка.</p>
            </aside>
            <div className="ke-facts">
              {archive.map((item) => {
                const isExpanded = expanded === item.date;
                return (
                  <div key={item.date}>
                    <button
                      className="ke-fact"
                      type="button"
                      onClick={() => setExpanded(isExpanded ? null : item.date)}
                      aria-expanded={isExpanded}
                    >
                      <time>{item.date}</time>
                      <span>{item.label}</span>
                      {isExpanded ? <ChevronRight size={17} style={{ transform: "rotate(90deg)" }} /> : <Plus size={17} />}
                    </button>
                    {isExpanded && <div className="ke-expanded">{item.detail}</div>}
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        <section className="ke-section ke-practice" id="practice" aria-labelledby="practice-title">
          <div className="ke-section-label">02 / Практика</div>
          <h2 className="ke-section-title" id="practice-title">Профессиональная работа с гимнастками, тренерами и командами.</h2>
          <div className="ke-practice-grid">
            {practice.map((item) => (
              <article className="ke-practice-card" key={item.index}>
                <span>{item.index}</span>
                <h3>{item.title}</h3>
                <p>{item.copy}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="ke-section ke-process" aria-labelledby="process-title">
          <div className="ke-section-label">03 / Подход</div>
          <div className="ke-process-grid">
            <p className="ke-process-copy" id="process-title">«Хорошее упражнение — это когда <em>характер гимнастки</em> становится виден в каждой детали, а не теряется за сложностью».</p>
            <div className="ke-steps">
              <div className="ke-step"><b>01</b><div><strong>Сначала — задача</strong>Возраст, уровень, состав, цель старта или вопрос, который требует решения.</div></div>
              <div className="ke-step"><b>02</b><div><strong>Затем — точность</strong>Музыка, композиция, техника и драматургия работают как одна система.</div></div>
              <div className="ke-step"><b>03</b><div><strong>В финале — ясный план</strong>Конкретные шаги для доработки без перегруженного языка и случайных решений.</div></div>
            </div>
          </div>
        </section>

        <section className="ke-sources" id="sources" aria-labelledby="sources-title">
          <div className="ke-source-grid">
            <div>
              <div className="ke-section-label">04 / Открытые источники</div>
              <h2 id="sources-title">Основание<br />для доверия.</h2>
              <p className="ke-source-intro">Страница не подменяет биографию красивым пересказом: основные сведения привязаны к опубликованным спортивным материалам.</p>
            </div>
            <div>
              <div className="ke-source-list">
                <a className="ke-source" href="https://sport-strana.ru/stremilova-kadenkova-darja-dmitrievna/" target="_blank" rel="noreferrer">
                  <div><span>Биографическая справка</span><b>Спорт-страна.ру</b></div><MoveUpRight size={18} />
                </a>
                <a className="ke-source" href="https://shvsm-penza.ru/post/8295" target="_blank" rel="noreferrer">
                  <div><span>Архив спортивной школы</span><b>ЦСП «ШВСМ», Пенза · 2013</b></div><MoveUpRight size={18} />
                </a>
                <a className="ke-source" href="https://burtasy.ru/school/news/509.html" target="_blank" rel="noreferrer">
                  <div><span>Результаты соревнований</span><b>СШОР по гимнастике им. Н. А. Лавровой</b></div><MoveUpRight size={18} />
                </a>
              </div>
              <p className="ke-source-note">Википедийная статья о Дарье Каденковой не найдена и не используется. Перед запуском сайта рекомендуются редакторская проверка дат, титулов и актуальных мест работы.</p>
            </div>
          </div>
        </section>

        <section className="ke-contact" id="contact" aria-labelledby="contact-title">
          <div>
            <div className="ke-section-label">05 / Контакт</div>
            <h2 className="ke-section-title" id="contact-title">Есть задача для ковра?</h2>
            <p className="ke-contact-copy">Расскажите о гимнастке, команде или программе. В ответ можно обсудить подходящий формат работы и первые шаги.</p>
          </div>
          <div className="ke-contact-form">
            {sent ? (
              <div className="ke-success" role="status">
                <b>Сообщение принято.</b>
                Спасибо за описание задачи. Контакт для ответа добавляется после финального согласования сайта.
              </div>
            ) : (
              <form onSubmit={submit}>
                <label htmlFor="ke-name">Имя</label>
                <input id="ke-name" name="name" required placeholder="Как к вам обращаться?" />
                <label htmlFor="ke-contact">Контакт</label>
                <input id="ke-contact" name="contact" required placeholder="Телефон или Telegram" />
                <label htmlFor="ke-message">Задача</label>
                <textarea id="ke-message" name="message" required rows={4} placeholder="Индивидуальное занятие, постановка, консультация…" />
                <button className="ke-send" type="submit">Отправить запрос <ArrowDownRight size={15} /></button>
              </form>
            )}
          </div>
        </section>
      </main>

      <footer className="ke-footer">
        <span>© Дарья Каденкова · художественная гимнастика</span>
        <span>Профиль создан на основе открытых источников</span>
        <a href="#top">Наверх</a>
      </footer>
    </div>
  );
}