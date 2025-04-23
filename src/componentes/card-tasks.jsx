import Image from "next/image"

export default function CardTasks() {
  return (
      <section className="w-full max-w-4xl h-fit mx-auto px-6 py-8 bg-indigo-800">
          <article className="w-fit">
              <div className="w-64 min-h-48 gap-2 flex flex-col items-start justify-center bg-amber-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300 ease-in-out">
                  <Image
                      src="/repo/undefined/undefined-1745289548272-tr1f4x1c-1366_2000.jpeg"
                      alt="Task Image"
                      width={1500}
                      height={1500}
                      className="w-64 h-48 object-cover "
                  />
                  <div className="pl-2 py-1">
                      <h3>Card One</h3>
                      <h4>Costo: 15$</h4>
                    <p>tags: Work</p>
                </div>
              </div>
          </article>
    </section>
  )
}
