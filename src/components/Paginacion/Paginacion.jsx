const Paginacion = ({
  paginaAnterior,
  paginaSiguiente,
  paginaSeleccionada,
  paginas,
}) => {
  return (
    <div>
      <ul
        style={{
          display: 'flex',
          listStyle: 'none',
          width: '100vw',
          justifyContent: 'space-evenly',
        }}
      >
        <li>
          <a href={'#'} onClick={paginaAnterior}>
            Anterior
          </a>
        </li>
        {paginas?.totalPages &&
          new Array(paginas.totalPages).fill(0).map((pagina, index) => {
            return (
              <li key={`Page_${index + 1}`}>
                <a
                  href={'#'}
                  onClick={() => {
                    paginaSeleccionada(index + 1)
                  }}
                  style={{
                    fontSize: paginas.currentPage === index + 1 ? '18px' : '',
                    color:
                      paginas.currentPage === index + 1 ? 'deeppink' : 'black',
                  }}
                >
                  {index + 1}
                </a>
              </li>
            )
          })}
        <li>
          <a href={'#'} onClick={paginaSiguiente}>
            Siguiente
          </a>
        </li>
      </ul>
    </div>
  )
}

export default Paginacion
