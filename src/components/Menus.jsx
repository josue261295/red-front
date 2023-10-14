
const Menus = () => {
  const accordionItems = document.querySelectorAll('.accordion-item');
 

  return (
    <>

      <div class="contenedor">


      
    


  
  <div class="sidebar ancho">
    <div class="logo text-warning">
      <i class="fa fa-ravelry fa-2x logo-sym"></i><span class="logo-texto">Taller de sistemas</span>
    </div>

    <div class="user">
    <img
      src="https://www.auditool.org/joomlatools-files/docman-images//G%20Y%20M%202%20(1).png"
      alt="Descripción de la imagen"
      width="50"
      height="50"
          />
      <span class='user-nombre'>Josue Fernando Paco Cruz</span>
    </div>

    <nav class="menu-nav">
      <ul>
      <li class="menu-titles">Monitoreo</li>
        <li class="menu-titles">principal</li>
        <li class="menu-items"><a href="#"><i class='fa fa-tachometer  menu-nav--icon fa-fw'></i><span>Red</span></a>
          <a href='#' class="menu-boton"><i class='fa fa-caret-right'></i></a>
          <ul class="menu-nav-seg">
            <li class="menu-items-seg"><a href="#">Control del Trafico de Red</a></li>
            <li class="menu-items-seg"><a href="#">Velocidad de Red</a></li>
           
          </ul>
        </li>
        <li class="menu-items"><a href="#"><i class='fa fa-apple  menu-nav--icon fa-fw'></i><span class="menu-items">Usuarios</span></a></li>
        <li class="menu-titles">Cuarentena</li>
        <li class="menu-titles">Uso y trafico</li>
        <li class="menu-titles">Baneo</li>
        <li class="menu-items"><a href="#"><i class='fa fa-inbox  menu-nav--icon fa-fw'></i><span class="menu-items">Seguridad</span></a></li>
        
        <li scope="col"> Infectados y Alertas </li>
        <li> Cntrol</li>
        
       
      </ul>
    </nav>
  </div>
  <div class="main bg-light">
    <div class="barra">
      <a class= 'menu-toggle'><i class="fa fa-bars menu-nav--icon"></i></a>
    <a href="#" class="float-right btn btn-info" target="_blank">Template</a>
    </div>
    
    
    <div class="main-container">
      
      <div class="bg-white">
        <h1 class="text-center">Listado de la red </h1>
        <table class="table text-nowrap">
        <thead class="thead-dark">
          <tr>
            <th scope="col">Servicio primario</th>
            <th scope="col"></th>
            <th scope="col">Servicio secundarios</th>
            <th scope="col"></th>
            <th scope="col">Velocidad</th>
          </tr>
        </thead>
        <tbody>
          <tr>
          <td>Empresa Entel</td>
            <td></td>
            <td>Empresa AXS</td>
            <td></td>
            <td>90MB /  60MB</td>
          </tr>
         
        </tbody>
      </table>
      </div>
      
      <div class="d-flex mt-3">
        <div class="col-3 bg-white">
        <img
      src=""
      alt="Descripción de la imagen"
      width="50"
      height="50"
          />


          
          
        </div>
        
        
        
        
       
      </div>
      
      
    </div>

  </div>
  
</div>


    </>
  )
}

export default Menus
