import styles from './page.module.css'
import Link from 'next/link'

export default function Home() {
  return (
    <section className = {styles.Home}>
      <h1 >Bienvenido al sistema de monitoreo</h1> 
      <article>
          <h2>En esta sección, encontrarás sugerencias y posibles informes basados en los datos de tus sensores. </h2>
          <div className="row">
            <div className="col-sm-6 text-center">
              <div className="card">
                <div className="card-body">
                  <h5>Estado del agua</h5>
                  <p className="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed id ullam dicta. Repudiandae, quidem. Officiis quasi repellendus neque. Itaque nesciunt quae excepturi iste dicta maxime tempora tenetur voluptatem dolores voluptates</p>
                  <Link href="/views/hidroponia" className="btn btn-primary">Ver estadisticas</Link>
                </div>
              </div>
            </div>
            <div className="col-sm-6 text-center">
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">Estado de la sala</h5>
                  <p className="card-text">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vitae amet nesciunt beatae ab exercitationem animi quam commodi non dolorem perferendis, reprehenderit voluptates? Architecto hic, at ipsa facilis consequuntur quasi id!</p>
                  <Link href="/views/temperature" className="btn btn-primary">Ver estadisticas</Link>
                </div>
              </div>
            </div>
          </div>
      </article>
    </section>
  )
}
