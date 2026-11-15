const phone = "5584996452268";
const wa = (message: string) =>
  `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;

const messages = {
  general: "Olá! Tenho interesse nas aulas de Muay Thai Kids. Pode me passar mais informações?",
  viana: "Olá! Tenho interesse nas aulas de Muay Thai Kids na Viana Jiu-Jitsu. Pode me passar mais informações?",
  fifty: "Olá! Tenho interesse nas aulas de Muay Thai Kids na Fifty Fifty Fight. Pode me passar mais informações?",
  personal: "Olá! Tenho interesse no Personal Fight Infantil, com aulas de Muay Thai em casa. Pode me passar mais informações?",
  atypical: "Olá! Gostaria de conversar sobre aulas adaptadas de Muay Thai para uma criança atípica. Pode me explicar como funciona?"
};

function WhatsAppButton({
  href,
  children,
  secondary = false
}: {
  href: string;
  children: React.ReactNode;
  secondary?: boolean;
}) {
  return (
    <a className={secondary ? "button button-secondary" : "button"} href={href} target="_blank" rel="noreferrer">
      {children}
      <span aria-hidden="true">↗</span>
    </a>
  );
}

function SectionLabel({ children }: { children: React.ReactNode }) {
  return <p className="eyebrow">{children}</p>;
}

export default function Home() {
  return (
    <main>
      <header className="site-header">
        <a className="brand" href="#inicio" aria-label="Team Cesar Muay Thai Kids, início">
          <img className="brand-logo" src="/logoteamcesar.png" alt="Team Cesar Muay Thai" />
        </a>
        <nav className="desktop-nav" aria-label="Navegação principal">
          <a href="#beneficios">Benefícios</a>
          <a href="#unidades">Unidades</a>
          <a href="#professor">Professor</a>
          <a href="#faq">Dúvidas</a>
        </nav>
        <WhatsAppButton href={wa(messages.general)}>Agendar aula</WhatsAppButton>
      </header>

      <section className="hero" id="inicio">
        <div className="hero-copy">
          <SectionLabel>MUAY THAI INFANTIL · NATAL/RN</SectionLabel>
          <h1>Mais confiança, disciplina e movimento para o seu filho.</h1>
          <p className="hero-lead">
            Muay Thai Kids para crianças de 5 a 11 anos. Uma experiência esportiva
            que combina movimento, aprendizado e respeito, no ritmo de cada criança.
          </p>
          <div className="hero-points">
            <span><i>✓</i> Disciplina e respeito</span>
            <span><i>✓</i> Coordenação e movimento</span>
            <span><i>✓</i> Confiança e autocontrole</span>
          </div>
          <div className="hero-actions">
            <WhatsAppButton href={wa(messages.general)}>Agendar aula experimental</WhatsAppButton>
            <a className="text-link" href="#unidades">Conhecer as turmas <span>↓</span></a>
          </div>
          <p className="hero-note">Aula experimental gratuita · Consulte horários e condições</p>
        </div>
        <div className="hero-visual">
          <div className="hero-photo-wrap">
            <img src="/images/kids-training-banner.jpg" alt="Crianças sorrindo com luvas de Muay Thai" className="hero-photo" />
            <div className="photo-tag"><span className="tag-dot" /> ESPORTE, VALORES E EVOLUÇÃO</div>
          </div>
          <div className="hero-stamp"><strong>5–11</strong><span>ANOS</span></div>
          <div className="hero-blue-shape" />
        </div>
      </section>

      <section className="trust-strip" aria-label="Informações rápidas">
        <div><b>5 a 11 anos</b><span>Faixa etária</span></div>
        <div><b>60 minutos</b><span>Duração da aula</span></div>
        <div><b>2 unidades</b><span>Em Natal/RN</span></div>
        <div><b>Aula gratuita</b><span>Primeiro contato</span></div>
      </section>

      <section className="section benefits" id="beneficios">
        <div className="section-heading">
          <SectionLabel>DESENVOLVIMENTO DENTRO E FORA DA ACADEMIA</SectionLabel>
          <h2>Muito mais que aprender um esporte.</h2>
          <p>O treino é uma oportunidade para experimentar, aprender e desenvolver habilidades que acompanham a criança no dia a dia.</p>
        </div>
        <div className="benefit-grid">
          <article className="benefit-card">
            <span className="card-number">01 / FÍSICO</span>
            <div className="icon-circle red">↗</div>
            <h3>Corpo em movimento</h3>
            <p>Exercícios de movimentação e coordenação ajudam a desenvolver equilíbrio, agilidade e consciência corporal.</p>
          </article>
          <article className="benefit-card">
            <span className="card-number">02 / COMPORTAMENTO</span>
            <div className="icon-circle blue">◎</div>
            <h3>Disciplina e foco</h3>
            <p>Aprender a ouvir orientações, respeitar regras e persistir diante de novos desafios.</p>
          </article>
          <article className="benefit-card">
            <span className="card-number">03 / SOCIAL</span>
            <div className="icon-circle gold">✳</div>
            <h3>Respeito e convivência</h3>
            <p>Treinar em grupo cria oportunidades de cooperação, amizade e respeito às diferenças.</p>
          </article>
        </div>
      </section>

      <section className="section training-section">
        <div className="training-image">
          <img src="/images/IMAGEM5.jpeg" alt="Professor de Muay Thai orienta crianças durante uma atividade" />
        </div>
        <div className="training-copy">
          <SectionLabel>COMO FUNCIONA</SectionLabel>
          <h2>Muay Thai adaptado para a infância.</h2>
          <p>As atividades combinam exercícios de coordenação, movimentação e aprendizado de técnicas do Muay Thai, com orientação e respeito ao ritmo de cada criança.</p>
          <ol className="steps">
            <li><span>01</span><div><strong>Aquecimento e movimento</strong><p>Atividades para preparar o corpo e começar a explorar os movimentos.</p></div></li>
            <li><span>02</span><div><strong>Coordenação e agilidade</strong><p>Exercícios com cones e escadas de agilidade.</p></div></li>
            <li><span>03</span><div><strong>Aprendizado das técnicas</strong><p>Introdução aos movimentos e prática nos aparadores.</p></div></li>
            <li><span>04</span><div><strong>Prática orientada</strong><p>Repetição dos movimentos e reforço dos aprendizados.</p></div></li>
          </ol>
          <p className="small-note">Aulas de 60 minutos. A academia disponibiliza equipamentos para os primeiros treinos. Não é necessário comprar luvas imediatamente.</p>
        </div>
      </section>

      <section className="section locations" id="unidades">
        <div className="section-heading centered">
          <h2>Escolha onde treinar</h2>
          <p>As aulas são ministradas pela Team Cesar Muay Thai em academias parceiras de Natal.</p>
        </div>
        <div className="location-grid">
          <article className="location-card">
            <div className="location-top">
              <span className="partner-label">LOCAL DAS AULAS</span>
              <img src="/images/viana-logo-reference.jpg" alt="Referência visual da marca Viana Jiu-Jitsu" />
            </div>
            <h3>Viana Jiu-Jitsu</h3>
            <p className="address">Av. Itapetinga, 112 · Natal/RN</p>
            <div className="schedule">
              <span>Dias de treino</span><strong>Terças, quintas e sábados</strong>
              <span>Horário</span><strong>18h</strong>
            </div>
            <WhatsAppButton href={wa(messages.viana)}>Tenho interesse nesta unidade</WhatsAppButton>
            <a className="map-link" href="https://www.google.com/maps/search/?api=1&query=Viana+Jiu-Jitsu+Av+Itapetinga+112+Natal+RN" target="_blank" rel="noreferrer">Ver localização no mapa ↗</a>
          </article>
          <article className="location-card">
            <div className="location-top">
              <span className="partner-label">LOCAL DAS AULAS</span>
              <img src="/images/fifty-fifty-logo-reference.jpg" alt="Referência visual da marca Fifty Fifty Fight" />
            </div>
            <h3>Fifty Fifty Fight</h3>
            <p className="address">Av. Presidente Dutra, 123 · Natal/RN</p>
            <div className="schedule">
              <span>Dias de treino</span><strong>Segundas, quartas e sextas</strong>
              <span>Horário</span><strong>18h</strong>
            </div>
            <WhatsAppButton href={wa(messages.fifty)}>Tenho interesse nesta unidade</WhatsAppButton>
            <a className="map-link" href="https://www.google.com/maps/search/?api=1&query=Fifty+Fifty+Fight+Av+Presidente+Dutra+123+Natal+RN" target="_blank" rel="noreferrer">Ver localização no mapa ↗</a>
          </article>
        </div>
        <p className="location-footnote">A Team Cesar Muay Thai é responsável pelas aulas. Viana Jiu-Jitsu e Fifty Fifty Fight são os locais parceiros de treinamento.</p>
      </section>

      <section className="personal-section">
        <div className="personal-inner">
          <div>
            <SectionLabel>PERSONAL FIGHT INFANTIL</SectionLabel>
            <h2>O treino também pode acontecer na sua casa.</h2>
            <p>Para famílias que preferem atenção individual ou precisam de mais flexibilidade na rotina, existe a opção de aulas em domicílio.</p>
            <ul className="check-list">
              <li>Atendimento individual</li>
              <li>Atividades respeitando o ritmo da criança</li>
              <li>Possibilidade de adaptação para crianças atípicas</li>
              <li>Atendimento em até 5 km da academia de referência</li>
            </ul>
          </div>
          <div className="personal-price">
            <span>VALORES E CONDIÇÕES</span>
            <strong>Sob consulta</strong>
            <p>Personal Fight Infantil</p>
            <WhatsAppButton href={wa(messages.personal)}>Consultar disponibilidade</WhatsAppButton>
          </div>
        </div>
      </section>

      <section className="section inclusion">
        <div className="inclusion-mark">+</div>
        <div>
          <SectionLabel>ACOLHIMENTO E RESPEITO ÀS DIFERENÇAS</SectionLabel>
          <h2>Cada criança tem seu próprio ritmo.</h2>
          <p>Também conversamos com famílias de crianças atípicas para entender suas necessidades e avaliar adaptações nas atividades. O objetivo é oferecer uma experiência esportiva acolhedora, respeitando as particularidades de cada criança.</p>
          <p className="small-note">As aulas têm finalidade esportiva e educativa e não substituem acompanhamento médico, terapêutico ou especializado.</p>
          <WhatsAppButton href={wa(messages.atypical)} secondary>Conversar sobre aulas adaptadas</WhatsAppButton>
        </div>
      </section>

      <section className="section coach-section" id="professor">
        <div className="coach-photo">
          <img src="/images/cisco-portrait-clean.jpg" alt="Cisco Cruz, atleta da Team Cesar Muay Thai" />
          <span className="coach-photo-label">ATLETA · TEAM CESAR</span>
        </div>
        <div className="coach-copy">
          <SectionLabel>QUEM CONDUZ OS TREINOS</SectionLabel>
          <h2>Conheça Cisco Cruz.</h2>
          <p>Praticante de Muay Thai há cerca de três anos, Cisco é atleta da modalidade, possui prajied azul e participou de seminários, incluindo experiências com professores tailandeses.</p>
          <p>Também participa do projeto social Movimento Kids, em parceria com a Igreja Life House, conectando o esporte a experiências de convivência e desenvolvimento infantil.</p>
          <div className="coach-facts">
            <div><strong>3</strong><span>anos de prática, aproximadamente</span></div>
            <div><strong>3</strong><span>lutas realizadas</span></div>
            <div><strong>1</strong><span>cinturão conquistado</span></div>
          </div>
          <a className="text-link" href="https://www.instagram.com/muaythai_cesar/" target="_blank" rel="noreferrer">Acompanhar no Instagram ↗</a>
        </div>
      </section>

      <section className="section gallery-section">
        <div className="section-heading">
          <SectionLabel>NOSSO TRABALHO</SectionLabel>
          <h2>Conheça a <span className="gallery-title-highlight">TEAM CESAR</span></h2>
          <p>Conheça a equipe e acompanhe os registros das atividades.</p>
        </div>
        <div className="gallery-grid">
          <a href="https://www.instagram.com/muaythai_cesar/" target="_blank" rel="noreferrer">
            <img src="/images/imagem1.jpeg" alt="Equipe reunida para um treino de Muay Thai" />
          </a>
          <a href="https://www.instagram.com/muaythai_cesar/" target="_blank" rel="noreferrer">
            <img src="/images/imagem2.jpeg" alt="Equipe Team Cesar Muay Thai reunida na academia" />
          </a>
          <a href="https://www.instagram.com/muaythai_cesar/" target="_blank" rel="noreferrer">
            <img src="/images/imagem3.jpeg" alt="Equipe reunida na unidade Viana Jiu-Jitsu" />
          </a>
        </div>
      </section>

      <section className="section safety-section">
        <div className="safety-icon">✓</div>
        <div>
          <SectionLabel>ESPORTE COM RESPONSABILIDADE</SectionLabel>
          <h2>Aprender a lutar também é aprender a respeitar limites.</h2>
          <p>O trabalho infantil é voltado à movimentação, ao aprendizado de técnicas individuais e aos exercícios nos aparadores. A proposta é desenvolver disciplina e autocontrole, não incentivar confrontos ou agressividade.</p>
        </div>
      </section>

      <section className="section faq-section" id="faq">
        <div className="section-heading centered">
          <SectionLabel>AINDA TEM DÚVIDAS?</SectionLabel>
          <h2>O que os pais costumam perguntar.</h2>
        </div>
        <div className="faq-list">
          {[
            ["Muay Thai não é perigoso para crianças?", "As aulas são orientadas e têm foco em movimentação, técnicas individuais e exercícios nos aparadores. A proposta é esportiva e educativa, com respeito aos limites da criança."],
            ["Meu filho pode ficar mais agressivo?", "O objetivo é trabalhar disciplina, respeito às regras e autocontrole. As técnicas são ensinadas como prática esportiva, não como incentivo a brigas."],
            ["Meu filho é tímido. Vai conseguir acompanhar?", "Não é necessário chegar com experiência ou desenvoltura. A criança pode conhecer a atividade e aprender gradualmente, respeitando seu ritmo."],
            ["Precisa ter experiência?", "Não. As aulas também são para iniciantes. A criança pode começar do zero."],
            ["Precisa comprar luvas e equipamentos?", "A academia possui equipamentos para os primeiros treinos. Não é necessário comprar tudo imediatamente. Roupas confortáveis são recomendadas."],
            ["Qual a diferença entre turma e aula particular?", "Na turma, a criança treina em uma das academias parceiras. No Personal Fight, o professor vai até a residência. Fale com a gente para consultar frequência e condições."],
            ["Tem aula experimental?", "Sim. A primeira aula experimental é gratuita e pode ser acompanhada pelos responsáveis."],
            ["Atendem crianças atípicas?", "Sim, podemos conversar com a família sobre adaptações e acolhimento, respeitando as particularidades e o ritmo da criança."]
          ].map(([q, a]) => (
            <details className="faq-item" key={q}>
              <summary>{q}<span>+</span></summary>
              <p>{a}</p>
            </details>
          ))}
        </div>
      </section>

      <section className="final-cta">
        <div className="final-cta-inner">
          <SectionLabel>O PRIMEIRO PASSO COMEÇA COM UMA AULA</SectionLabel>
          <h2>Dê ao seu filho a oportunidade de experimentar.</h2>
          <p>Converse com o professor, escolha a unidade e agende uma aula experimental gratuita.</p>
          <div className="final-actions">
            <WhatsAppButton href={wa(messages.general)}>Agendar aula experimental</WhatsAppButton>
            <a className="final-secondary" href="#unidades">Ver unidades e horários</a>
          </div>
        </div>
      </section>

      <footer className="site-footer">
        <div className="footer-brand">
          <img className="brand-logo" src="/logoteamcesar.png" alt="Team Cesar Muay Thai" />
        </div>
        <p>Aulas de Muay Thai Kids em Natal/RN.<br />Viana Jiu-Jitsu e Fifty Fifty Fight são unidades parceiras.</p>
        <div className="footer-links">
          <a href="https://www.instagram.com/muaythai_cesar/" target="_blank" rel="noreferrer">Instagram ↗</a>
          <a href={wa(messages.general)} target="_blank" rel="noreferrer">WhatsApp ↗</a>
        </div>
        <small>© 2026 Team Cesar Muay Thai. Todos os direitos reservados.</small>
      </footer>

      <a className="floating-whatsapp" href={wa(messages.general)} target="_blank" rel="noreferrer" aria-label="Fale com o professor pelo WhatsApp">
        <span className="wa-icon">✆</span><span>Fale com o professor</span>
      </a>
    </main>
  );
}
