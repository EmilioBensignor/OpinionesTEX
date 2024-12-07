const reviews1 = [
  {
    location: "Madrid, España",
    tour: "Europa Soñada",
    title: "Viajar fue nuestro sueño cumplido!",
    review: "Hicimos con mi mujer el Tour 'Europa Soñada'. La atención que recibimos de Tour Experto fue muy buena. Con información muy clara. Nos atendió Francini, que siempre respondió todas nuestras consultas. Excelente viaje! Divinos los guías. Muy buena la hoteleria. Solo una contra. Tuvimos mal clima los primeros días. Pero igual el grupo de gente en el bus hizo que se pasara de manera divertida. Esperamos poder hacer otro tour en breve.",
    stars: 4,
    name: "Ezequiel C",
    image: "grupo-de-viaje-ezequiel-c"
  },
  {
    location: "Venecia, Italia",
    tour: "Panorama Europeo",
    title: "Primera vez en Europa",
    review: "Mi primera vez en Europa, sin duda, volvería a ir con un tour y Europamundo sería la opción. 4 países, 14 ciudades, cómodos autobuses y hoteles confortables, la mayoría para pasar 1 noche, con desayuno incluido, todo excelente! Gracias",
    stars: 5,
    name: "Val B",
    image: "venecia-val-b"
  },
  {
    location: "Brujas, Bélgica",
    tour: "Vuelta Centroeuropea",
    title: "Experiencia increíble, impecable organización!",
    review: "Nuestro tour por Europa fue maravilloso. El asesoramiento que recibimos desde el principio nos permitió viajar con mucha tranquilidad. Todo salio tal cual estaba planificado. Lo mejor de todo fue lo bien organizado que estaban los traslados y lo interesante de las excursiones que pudimos aprovechar. Todo dentro del mismo paquete. El alojamiento estuvo bien. A veces un poco alejado de alguno de los centros urbanos. Pero como estábamos todo el día con actividades nunca afecto demasiado. Excelente opción si quieres un viaje con todo resuelto. Volveremos a repetir!!!",
    stars: 5,
    name: "Marcelo S",
    image: "tour-viaje-marcelo-s"
  },
  {
    location: "Alsacia, Francia",
    tour: "España, Sur de Francia, Borgoña y Alsacia",
    title: "Viaje en familia que quedara siempre en mi recuerdo!",
    review: "Hermosa experiencia de viaje en familia! Recorrimos Italia en un viaje que teníamos pensando hace unos años. Llegamos a la pagina de Tour Experto por recomendación de unos amigos que ya habían viajado por España. Nos atendieron de manera muy cordial y con gran dedicación para ayudarnos a encontrar el tour ideal. Gran recomendación de Majorie, la vendedora, que supo entender rápidamente lo que buscábamos. Todo salió muy bien. Nos encontraron las excursiones y los guías. Muy bien preparados, muy atentos. El único problema que tuvimos fue con las maletas al regreso. La aerolínea demoro la conexión del vuelo y nos llegaron un día mas tarde. Nada grave, pero los regalitos llegaron después. El resto del viaje fue un sueño.",
    stars: 4,
    name: "Nico F",
    image: "pueblos-que-parecen-pintados-nico-F"
  },
  {
    location: "Paris, Francia",
    tour: "España, Suiza y Francia con Ámsterdam",
    title: "Vivimos la mejor experiencias de nuestras vidas.",
    review: "Al principio no creíamos en la página, pero Francini se ganó nuestra confianza. Nos ayudó en todo momento, nunca me dejó alguna duda sin responder. Fueron los mejores 15 años de mi hija. Pasamos una experiencia increíble. Definitivamente VOLVERÉ A VIAJAR CON TOUR EXPERTO.",
    stars: 5,
    name: "Sarimar2213",
    image: "viajando-paris-sarimar"
  },
  {
    location: "Barcelona, España",
    tour: "España de Norte a Sur",
    title: "Unas vacaciones estupendas",
    review: "Muy buena y esmerada la atención. Todo bien: hoteles, transporte y guías. todo de lujo!! Muchas gracias. Muy satisfecho",
    stars: 5,
    name: "Francisco Luna L",
    image: "es-el-grupo-de-europamundo-francisco-luna"
  },
  {
    location: "Oslo, Noruega",
    tour: "Bellezas de Noruega fin Oslo",
    title: "Experiencia en Tour Bellezas de Oslo",
    review: "En general disfruté mucho del viaje. Al principio no recibimos mucha información y la que comentaron que colocaron no era muy obvia, por lo que es muy recomendable bajar la aplicación para que ahí lleguen las notificaciones. El viaje fue tal cual el itinerario. La mayor parte del viaje te la pasas en el autobús, pero las vistas son impresionantes. Los hoteles en general me gustaron mucho, menos el de Oslo que ya estaba muy viejo y descuidado. Lo que no me encanto fue el camión donde estuvimos viajando. No tenía wifi, ni se podían cargar los celulares y el baño no podía usarse. Estaba algo viejo y en un punto del viaje le estalló una llanta, además de que el chofer manejaba un tanto loco. Salimos junto con otro grupo de habla inglesa, que tenían mejor autobús y además a ellos les manejaron precios menores en los tours opcionales, cosa que no se me hizo de mi agrado. El guía, que conocía mucho y te explicaba la historia de cada lugar, en general estuvo bien pero no fue espectacular. Pero creo que por el precio del tour todo valió mucho la pena.",
    stars: 4,
    name: "Beckhinna DP",
    image: "bellezas-de-oslo-beckinna-dp"
  },
  {
    location: "San Sebastián, España",
    tour: "Andalucía, Portugal y País Vasco",
    title: "Excelente experiencia",
    review: "Excelente experiencia desde el principio, la cordialidad y eficiencia de Francini, quien nos ayudó a armar el tour y con quien mantuvimos fluida comunicación con nuestras dudas, sugerencias. El precio muy bueno, por debajo de presupuestos de otras agencias. La forma de pago no resultó beneficiosa, sin impuestos. El tour Andalucía Portugal y País Vasco súper recomendable, hoteles excelentes ubicados y muy muy buenos los desayunos. El hotel de San Sebastián merece una mención especial, hermoso, vistas excelentes desde la habitación. Todo resultó perfecto. Es la primera vez q contratamos tour de forma online, confiamos y fue excelente la experiencia. Todo resultó tal cual lo pactado.",
    stars: 5,
    name: "Pilnachito",
    image: "portugal-pilnachito"
  },
  {
    location: "Roma, Italia",
    tour: "Italia Turista",
    title: "Fantástico viaje!!",
    review: "Acabo de volver de un tour increíble por Europa con Tour Experto y simplemente tengo que compartir mi entusiasmo. Los guías fueron expertos y amigables, haciendo que cada destino fuera una experiencia única. Los hoteles y la logística estuvieron impecables, permitiéndo a mi familia disfrutar plenamente de cada momento. ¡Ya estoy planeando mi próxima aventura con ellos!",
    stars: 5,
    name: "Lio B",
    image: "plaza-di-popolo-lio-b"
  },
  {
    location: "Londres, Inglaterra",
    tour: "Lo Mejor de Inglaterra",
    title: "Excelente viaje, buen trato de la agencia y guías.",
    review: "Me encantó la experiencia. Los guías muy atentos y resolvían dudas al instante. Me hubiera gustado que los hoteles estuvieran más cerca de los lugares más turístico, sin embargo los hoteles contaban con todos los servicios",
    stars: 5,
    name: "Jorge C",
    image: "londres-jorge-c"
  }
]

const reviews2 = [
  {
    location: "Venecia, Italia",
    tour: "Europa Turista",
    title: "Amamos Venecia",
    review: "Lo mejor fue el paseo en góndola en Venecia. Siempre imaginé que sería súper turístico, pero fue completamente diferente tener esta experiencia en persona. El gondolero que nos tocó hasta nos cantó. Me sentí en la película.",
    stars: 5,
    name: "Lucía Ramis",
    image: "Lucia-Ramis"
  },
  {
    location: "Sestri Levante, Italia",
    tour: "Europa Turista",
    title: "Libertad y belleza en Italia",
    review: "Me gustó la parada en Sestri Levante. No imaginaba que la Riviera Italiana era tan bonita. Me encantó pasear al lado del mar. ¡Sin turistas! Definitivamente otra joya escondida. El resto del viaje también estuvo genial; todo estaba muy bien organizado y no tuve que preocuparme por nada.",
    stars: 5,
    name: "Eduardo Zuriaga",
    image: "Eduardo-Zuriaga"
  },
  {
    location: "Ginebra, Suiza",
    tour: "Europa Turista",
    title: "Gracias Tour Experto por este viaje!",
    review: "Ginebra fue algo inesperado. Nos dieron mucho tiempo para pasear y disfrutar del lago. Es súper tranquilo y disfrutamos mucho. En resumen, el tour fue realmente genial, bien organizado y con muchas paradas geniales.",
    stars: 4,
    name: "Gustavo Mendieta",
    image: "Gustavo-Mendieta"
  },
  {
    location: "París, Francia",
    tour: "Descubre Europa",
    title: "Viaje inolvidable en grupo a París y Roma",
    review: "Este viaje fue impresionante. Tengo los mejores recuerdos de París y Roma. El equipo era muy amigable y, siempre, teníamos mucho tiempo para explorar. Muy recomendable.",
    stars: 5,
    name: "Regina Lezcano",
    image: "Regina-Lezcano"
  },
  {
    location: "Roma, Italia",
    tour: "Descubre Europa",
    title: "Organizacion y ciudad mágica",
    review: "Venecia destaca entre todo el resto de las ciudades. Impecable la organización y la predisposición de los guías",
    stars: 5,
    name: "Sofía Lares",
    image: "Sofia-Lares"
  },
  {
    location: "Venecia, Italia",
    tour: "Descubre Europa",
    title: "Un tour maravilloso de principio a fin",
    review: "La mejor decisión tomada con mi pareja fue realizar este tour. Un excelente viaje, el cual recorrimos desde la historia de Roma hasta las playas de Sestri Levante",
    stars: 5,
    name: "Oscar Villena",
    image: "Oscar-Villena"
  },
  {
    location: "París, Francia",
    tour: "Paris e Italia",
    title: "Mi retrato en Paris",
    review: "¡Este tour fue increíble! Lo que más me gustó fue el paseo por Montmartre. Nos sentamos en una terraza para almorzar y un artista me dibujó un retrato. ¡Estaba muy bonito! Todo siempre muy bien organizado, los guías muy atentos, un viaje perfecto en general.",
    stars: 5,
    name: "María Sánchez-Galván",
    image: "Maria-Sanchez-Galvan"
  },
  {
    location: "Venecia, Italia",
    tour: "Paris e Italia",
    title: "El impresionante arte de cristal",
    review: "Lo mejor del tour fue Venecia. La demostración de cristal me dejó muy impresionado, no podía creer lo que veía. Aunque es opcional el paseo en góndola, ¡es altamente recomendable!",
    stars: 4,
    name: "Esteban Borrero",
    image: "Esteban-Borrero"
  },
  {
    location: "Amalfi, Italia",
    tour: "Paris e Italia",
    title: "Roma a la puesta del sol: el concepto del espectáculo",
    review: "Roma fue espectacular, especialmente el Coliseo al atardecer. Sin lugar a dudas, un viaje que repetiría",
    stars: 5,
    name: "Lola Estrada-Fitzgerald",
    image: "Lola-Estrada-Fitzgerald"
  },
  {
    location: "Fátima, Portugal",
    tour: "Todo Portugal",
    title: "Un viaje conmovedor y cómodo",
    review: "Fátima fue una experiencia asombrosa. No soy creyente, pero había algo increíble en el aire, y me sentí conmovida. Además, todo el viaje se sintió fácil y cómodo, y la mayor parte de los lugares fueron inesperados. ¡Muy buena opción para ver Portugal!",
    stars: 5,
    name: "Matilde Rego",
    image: "Matilde-Rego"
  },
  {
    location: "Pinhão, Portugal",
    tour: "Todo Portugal",
    title: "Dia perfecto",
    review: "Todo el viaje estuvo muy bien coordinado y me sentí cuidado en todo momento. Pasear en barco por el río Duero fue súper relajante. La parada en Pinhão, con el vinito local, le dio un toque genial al día",
    stars: 5,
    name: "Gaspar Monteiro",
    image: "Gaspar-Monteiro"
  },
  {
    location: "Braga, Portugal",
    tour: "Todo Portugal",
    title: "El recorrido espectacular y completo",
    review: "Braga y su Santuario de Bom Jesús fueron espectaculares, fue increíble ver las vistas desde arriba. Ojalá tuviera más tiempo para recorrer todo a mi propio ritmo, pero aún así, todo fue increíble y traté de aprovechar al máximo cada minuto con mi estancia.",
    stars: 4,
    name: "Joana Galvão",
    image: "Joana-Galvao"
  },
  {
    location: "Barcelona, España",
    tour: "Panorama Europeo",
    title: "Tiempo libre y actividades que valen la pena",
    review: "Venecia en barco es una especie de cuento. Quedarse un rato más en la plaza de San Pedro vale completamente la pena, en Roma, también. En Barcelona, el día libre lo use para ir al Parque Güell, ¡una locura, súper colorido!",
    stars: 5,
    name: "Ana Zuckermann",
    image: "Ana-Zuckermann"
  },
  {
    location: "Valle de Aosta, Italia",
    tour: "Panorama Europeo",
    title: "Increible experiencia",
    review: "Los Alpes y el Valle de Aosta fueron maravillosos. La mejor pasta que comí en todo el viaje fue en Trastevere. Me fascinó el tour, especialmente por cómo alterna las visitas guiadas y libres.",
    stars: 4,
    name: "Santiago Joplin",
    image: "Santiago-Joplin"
  },
  {
    location: "París, Francia",
    tour: "Panorama Europeo",
    title: "Gran viaje",
    review: "La verdad es que todo el tour estuvo super bien organizado, puntual y con guías que sabían muchísimo. Mis dos cosas favoritas fue ver cómo hacen el cristal en Venecia y recorrer Montmartre en París. Mi consejo sería pasear en barco por el Sena durante la puesta de Sol, vale cada minuto!",
    stars: 5,
    name: "Lara Covarrubias",
    image: "Lara-Covarrubias"
  },
  {
    location: "Barcelona, España",
    tour: "Sueños de Europa",
    title: "Todo perfecto en España",
    review: "Este tour fue más allá de mis expectativas. La parada en la Plaza Mayor, en Madrid, fue estupenda. Degustamos tapas increíbles y formidables vinos en un mesón típico. El resto del tour fue bien organizado y los guías fueron súper amables.",
    stars: 5,
    name: "Berto Montalvo",
    image: "Berto-Montalvo"
  },
  {
    location: "Toledo, España",
    tour: "Sueños de Europa",
    title: "Perfecto balance entre excursiones y tiempo libre",
    review: "Un balance perfecto entre las excursiones y el tiempo libre. La excursión de Toledo desde Madrid es imperdible, cuando caminaba por los callejones del casco antiguo me sentía como en la Edad Media. Y fue una sabia decisión cenar en Trastevere, en Roma, antes de regresar al hotel. Lo que más me gustó es que tenes tiempo para hacer cosas por tu cuenta, muy bien balanceado.",
    stars: 4,
    name: "Dante Orozco",
    image: "Dante-Orozco"
  },
  {
    location: "Versalles, Francia",
    tour: "Sueños de Europa",
    title: "Un viaje lleno de historia y maravillas arquitectónicas",
    review: "El tour fue increíble en todo momento. Me fascinó la visita a Versalles, caminar por esos jardines es como transportarse a otra época.",
    stars: 5,
    name: "Martina Ricchi",
    image: "Martina-Ricchi"
  },
  {
    location: "Budapest, Hungría",
    tour: "Berlin, Praga, Budapest y Viena",
    title: "Encanto europeo",
    review: "Me pareció genial la combinación entre ciudades con muchos años y tiempo libre. Budapest me dio la vuelta y fue genial ir a la zona peatonal por la noche. El guía lo hizo aún más interesante con sus palabras.",
    stars: 4,
    name: "Carmen Ríos",
    image: "Carmen-Rios"
  },
  {
    location: "Praga, República Checa",
    tour: "Berlin, Praga, Budapest y Viena",
    title: "Fotos de un viaje inolvidable",
    review: "El Puente de Carlos en Praga es increíble! Al principio llovizno, pero el reflejo de las luces en las piedras del puente era algo mágico. Estuve tomando fotos todo el rato y ahora son mis favoritas del viaje. En general, todo el tour tiene un ritmo excelente: tienes tiempo suficiente para disfrutar de cada lugar sin tener que correr.",
    stars: 5,
    name: "Manuel Villalba",
    image: "Manuel-Villalba"
  },
  {
    location: "Viena, Austria",
    tour: "Berlin, Praga, Budapest y Viena",
    title: "Las calles y el mercado",
    review: "En Viena, lo que más me gustó fue que después de tanta estructura, es decir monumento, darte un respiro, dejarte perder por las calles y terminar en un mercadito comiendo una strudel en un bar ubicado dentro de un parque. El tour en general me parece muy completo y muy bien organizado.",
    stars: 5,
    name: "Lucía Dávila",
    image: "Lucia-Davila"
  },
  {
    location: "Florencia, Italia",
    tour: "España, Francia, Suiza e Italia +i",
    title: "Visitas inolvidables",
    review: "El recorrido fue espectacular, sobre todo la visita a Florencia. Me encantó la subida al Mirador de Miguel Ángel, ¡qué vistas!",
    stars: 4,
    name: "Valeria Tiscar",
    image: "Valeria-Tiscar"
  },
  {
    location: "San Sebastián, España",
    tour: "España, Francia, Suiza e Italia +i",
    title: "Muchas experiencias",
    review: "En cuanto al tiempo en que la gira visitó San Sebastián, no podré olvidar mi caminata por la playa de la Concha y mi saborosa comida vasca típica para el almuerzo.",
    stars: 5,
    name: "Mariana Figueroa",
    image: "Mariana-Figueroa"
  },
  {
    location: "París, Francia",
    tour: "España, Francia, Suiza e Italia +i",
    title: "Un recorrido diverso en Europa",
    review: "Me gustó mucho la Torre Eiffel y el paseo en barco por el Sena, porque fue como ver París desde un punto de vista diferente. El tour fue interesante, completo, diverso y cubrió casi todos los aspectos más destacados de las ciudades.",
    stars: 5,
    name: "Gonzalo Miranda",
    image: "Gonzalo-Miranda"
  },
  {
    location: "Copenhague, Dinamarca",
    tour: "Gran Escandinavia",
    title: "Naturaleza impresionante y experiencias únicas en cada país",
    review: "Fue un gran día en Copenhague y todo, pero ¡viajar en barco a través de Sognefjord fue lo más asombroso! sigo sin poder creer lo increiblemente gigantesco y espectacualar rodeado de montañas que era. Se los recomiendo al 100% si amas la naturaleza.",
    stars: 5,
    name: "Nicolas Berzani",
    image: "Nicolas-Berzani"
  },
  {
    location: "Bergen, Noruega",
    tour: "Gran Escandinavia",
    title: "Vistas de ensueño y aventuras",
    review: "¡Qué viaje tan completo! Mi parte favorita fue definitivamente subir al monte Flouyen en Bergen. ¡Las vistas eran increíbles!",
    stars: 5,
    name: "Bruno Falk",
    image: "Bruno-Falk"
  },
  {
    location: "Helsinki, Finlandia",
    tour: "Gran Escandinavia",
    title: "Un tour memorable y completo",
    review: "Fue un tour mucho mejor de lo que pensé que sería. Desde la primera parada en Copenhague hasta la fortaleza de Suomenlinna en Helsinki, no hubo un día aburrido. ¡Súper recomendado!",
    stars: 5,
    name: "Claudia Ruiz",
    image: "Claudia-Ruiz"
  },
  {
    location: "Lago Ness, Escocia",
    tour: "Inglaterra, Escocia e Irlanda",
    title: "Historia y paisajes increíbles en cada destino del tour",
    review: "Me fascinó mi tiempo en el Castillo de Urquhart, había mucha historia, más una vista impagable del lago. Fue un tour completo, y con los viajes en ferry lo hicieron aún más.",
    stars: 4,
    name: "Carlos Villagrán",
    image: "Carlos-Villagran"
  },
  {
    location: "Dublín, Irlanda",
    tour: "Inglaterra, Escocia e Irlanda",
    title: "Un viaje equilibrado",
    review: "Dublín me sorprendió, es una ciudad pequeña pero dulce.. Buena organización con un equilibrio perfecto entre la naturaleza y la ciudad. Me encantó el ambiente relajado y las guías que nos acompañaron",
    stars: 5,
    name: "Gloria Santini",
    image: "Gloria-Santini"
  },
  {
    location: "Belfast, Irlanda del Norte",
    tour: "Inglaterra, Escocia e Irlanda",
    title: "Un tour completo",
    review: "El recorrido en ferry de Escocia a Irlanda es increíble! Hermosos paisajes y tiempo para descansar. El tour estuvo bárbaro, era muy completo y muy bien organizado, las guías eran muy experimentadas.",
    stars: 5,
    name: "Roberto Arrieta",
    image: "Roberto-Arrieta"
  },
  {
    location: "Londres, Inglaterra",
    tour: "De Londres a Madrid +i",
    title: "Londres una experiencia única",
    review: "Perfecto todo. En Londres, viendo el Cambio de Guardia en bucingan, un inglés nos contó dos cosas de la tradición; qué interesante. Invaluable",
    stars: 5,
    name: "Nora Patricia Torres",
    image: "Nora-Patricia-Torres"
  },
  {
    location: "París, Francia",
    tour: "De Londres a Madrid +i",
    title: "París y Brujas: una experiencia de película",
    review: "El recorrido fue de película, ¡literalmente! París en sí y su icónica Torre Eiffel fueron simplemente impresionantes. Además, en Brujas, parecía que uno estaba caminando en una postal. Vale cada segundo, la verdad.",
    stars: 4,
    name: "Silvia Del Prete",
    image: "Silvia-Del-Prete"
  },
  {
    location: "Barcelona, España",
    tour: "De Londres a Madrid +i",
    title: "Conexión y cultura en un viaje especial",
    review: "La organización estuvo impecable, en Barcelona, horas de charlas con un grupo en la terraza del Maremagnum. Lo que más me fascina de este viaje fue que siento que todos los lugares, de alguna forma, se conectan. ¡Regrese con el corazón lleno y feliz!",
    stars: 5,
    name: "Daniel Quiñones Díaz",
    image: "Daniel-Quinones-Diaz"
  },
  {
    location: "Perugia, Italia",
    tour: "Tutta Italia",
    title: "Un tour imperdible",
    review: "Me enamora Perugia y su historia. La ciudad del chocolate fue mi preferida, y el guía era más entretenido súper interesante y con una energía increíble que hizo que todo el recorrido sea maravilloso. ¡El tour es completísimo, lo recomiendo completamente!",
    stars: 5,
    name: "Ana Paula Berrocal",
    image: "Ana-Paula-Berrocal"
  },
  {
    location: "Roma, Italia",
    tour: "Tutta Italia",
    title: "Italia como una gran familia",
    review: "Venecia fue una joya, pero mi parada favorita fue Roma y su Trastevere, increíble éxito. La comida italiana es de primera, y todo el tour se sentía como una gran familia.",
    stars: 4,
    name: "Fabiana Orella",
    image: "Fabiana-Orella"
  },
  {
    location: "Perugia, Italia",
    tour: "Tutta Italia",
    title: "Un recorrido sin igual",
    review: "El ambiente de Perugia me encantó, el sabor del chocolate italiano. La organización es excelente, todo estuvo a tiempo, nada se retrasó, ningún problema. Tour 5/5",
    stars: 5,
    name: "Octavio Dalmasso Cagnoli",
    image: "Octavio-Dalmasso-Cagnoli"
  },
  {
    location: "Capadocia, Turquía",
    tour: "Turquia",
    title: "Una maravilla organizada",
    review: "Qué maravilla fue Capadocia la ciudad subterránea me dejo sin palabras y cada lugar del tour tuvo un encanto especial. ¡Muy bien organizado, quiero repetir! Gracias",
    stars: 5,
    name: "Cecilia Marlowe",
    image: "Cecilia-Marlowe"
  },
  {
    location: "Pamukkale, Turquía",
    tour: "Turquia",
    title: "Un viaje de magia",
    review: "Pamukkale y el Bósforo fueron mis favoritos, pero Efeso… ¡es otro mundo! Las cenas incluidas, perfectas para relajar después de cada día de exploración.",
    stars: 4,
    name: "Ingrid Delacroix",
    image: "Ingrid-Delacroix"
  },
  {
    location: "Estambul, Turquía",
    tour: "Turquia",
    title: "Historia y vistas impresionantes",
    review: "Toda la gira fascinante, llena de historia y muy bien acompañada de la estrella guía. ¡La Mezquita de Suleiman y una vuelta a través del Bósforor — ¡increíbles!",
    stars: 5,
    name: "Ramiro Quiroga Pastrana",
    image: "Ramiro-Quiroga-Pastrana"
  },
  {
    location: "Zurich, Suiza",
    tour: "Suiza al Completo",
    title: "Un tour variado con paradas bien organizadas",
    review: "La parada en la fábrica de chocolate me impresionó mucho, ¡para los golosos! El recorrido es perfecto: la variedad de paisajes y la disposición a lo largo del camino te hace sentir que estás aprovechando cada segundo.",
    stars: 5,
    name: "Emilio Garay",
    image: "Emilio-Garay"
  },
  {
    location: "Berna, Suiza",
    tour: "Suiza al Completo",
    title: "Un cuento hecho realidad",
    review: "Impresionante viaje. Berna parecía salido de un cuento, y el castillo de Chillón era una joya. Mi grupo era increíble. Hacen que esta experiencia sea aún más especial.",
    stars: 5,
    name: "Carla Bustos-Luján",
    image: "Carla-Bustos-Lujan"
  },
  {
    location: "Montañas Suizas",
    tour: "Suiza al Completo",
    title: "Paisajes impresionantes",
    review: "La mezcla entre paisajes, pueblitos y montañas me encantó, de verdad, no hay desperdicio en este tour. Los guías se aseguraron de que aprovecháramos al máximo todo y el recuerdo de estos lugares me lo llevo a casa.",
    stars: 5,
    name: "Luciana Santoro",
    image: "Luciana-Santoro"
  },
  {
    location: "Roma, Italia",
    tour: "De Roma a Madrid",
    title: "El Coliseo y Trastevere: lo mejor de Europa",
    review: "Primero ves el coliseo y terminas la noche en un restaurante en Trastevere. Una experiencia única. En general, el tour vuela con un ritmo y los guías nunca pierden de vista a nadie. Que gran manera de ver Europa en tiempo limitado",
    stars: 5,
    name: "Leo Hidalgo",
    image: "Leo-Hidalgo"
  },
  {
    location: "Barcelona, España",
    tour: "De Roma a Madrid",
    title: "Un viaje lleno de amigos",
    review: "Este viaje recorrio los lugares de moda. Trastevere por las noches, la vida en la hermosa Barcelona y la historia de Madrid, ¡qué más podría pedir! También hice amigos en este viaje, por lo que no estuve solo",
    stars: 5,
    name: "Lorena Ugalde",
    image: "Lorena-Ugalde"
  },
  {
    location: "Madrid, España",
    tour: "De Roma a Madrid",
    title: "Emociones y ciudades hermosas",
    review: "Increíble maratón a través de lugares hermosos e impresionantes. Todo fue genial, y la transferencia nocturna a Trastevere solo lo hizo mejor. De definitivamente volvería a hacerlo.",
    stars: 4,
    name: "Paola Sánchez Rizzo",
    image: "Paola-Sanchez-Rizzo"
  },
  {
    location: "París, Francia",
    tour: "Europa Soñada",
    title: "Un sueño cumplido",
    review: "¡Una experiencia inolvidable desde el primer día. Ver la Torre Eiffel y el Coliseo en el mismo viaje fue un sueño cumplido!.",
    stars: 4,
    name: "Irina Falken",
    image: "Irina-Falken"
  },
  {
    location: "Venecia, Italia",
    tour: "Europa Soñada",
    title: "Un viaje bien organizado",
    review: "Pisa, la Costa Azul, Venecia, todo te deja sin palabras, la guía siempre atenta, los tiempos perfectos. Ideal para los que quieren verlo todo sin complicarse!",
    stars: 5,
    name: "Lyra Donati",
    image: "Lyra-Donati"
  },
  {
    location: "Suiza",
    tour: "Europa Soñada",
    title: "La combinación perfecta",
    review: "Espectacular todo! La mezcla de paisajes en Suiza y las calles con historia en París fueron un combo perfecto!",
    stars: 5,
    name: "Juan segundo Ervit",
    image: "Juan-Segundo-Ervit"
  },
  {
    location: "Seúl, Corea del Sur",
    tour: "Clasicos de Corea y Japón Fin Tokio",
    title: "Perfecta armonía",
    review: "Un viaje increíble. Me gustó la combinación de historia y modernidad en Seúl, en cuanto al recorrido nocturno por Myeongdong, cumplió con todo a la perfección.",
    stars: 5,
    name: "Amalia Bustos",
    image: "Amalia-Bustos"
  },
  {
    location: "Seúl, Corea del Sur",
    tour: "Clasicos de Corea y Japón Fin Tokio",
    title: "¡Perfecto!",
    review: "Me dejó sin palabras, el cambio de guardia en el Palacio Gyeongbokgung; no sabía que podía encontrarme con algo así de especial. En general, el tour tiene una organización excelente y cada detalle está pensado para disfrutar al máximo.",
    stars: 5,
    name: "Liliana Silvia Pérez",
    image: "Liliana-Silvia-Perez"
  },
  {
    location: "Tokio, Japón",
    tour: "Clasicos de Corea y Japón Fin Tokio",
    title: "Un recorrido completo para conocer lo esencial de cada país",
    review: "Me encantó que cada lugar al que íbamos tenía un encanto distinto; el tour es completo y variado, ideal para conocer lo esencial de cada país.",
    stars: 4,
    name: "Ramón Olmedo Ibarra",
    image: "Ramon-Olmedo-Ibarra"
  },
  {
    location: "Dubrovnik, Croacia",
    tour: "Croacia, Bosnia y Eslovenia",
    title: "Encanto medieval y naturaleza",
    review: "El viaje completo fue increíble, pero Dubrovnik y su encanto medieval me dejaron sin palabras. Además, las vistas en Plitvice son para nunca olvidar. Muy bien organizado y siempre atento el guía.",
    stars: 5,
    name: "Graciela Edith Pereyra",
    image: "Graciela-Edith-Pereyra"
  },
  {
    location: "Sarajevo, Bosnia",
    tour: "Croacia, Bosnia y Eslovenia",
    title: "Una maravilla",
    review: "Sarajevo y Mostar para mí fueron lo mejor. Y los paisajes en Croacia, increíbles. Vale la pena.",
    stars: 4,
    name: "Juan Pablo Rivas Castro",
    image: "Juan-Pablo-Rivas-Castro"
  },
  {
    location: "Eslovenia",
    tour: "Croacia, Bosnia y Eslovenia",
    title: "Un viaje completo",
    review: "¡Qué viaje más completo! No creí que alcanzaría a ver tanto en tan poco tiempo. Los paseos en barco y las visitas guiadas realmente hacen la diferencia.",
    stars: 5,
    name: "Patricia del Carmen",
    image: "Patricia-del-Carmen"
  },
  {
    location: "Granada, España",
    tour: "Marruecos, España y Portugal",
    title: "Momentos inolvidables",
    review: "El tour es rico en detalles y se incluyen espectaculares visitas. Alhambra, Marrakech y el paseo en barco por Cambados nunca se olvidarán. ¡Una gran opción para ver tanto en tan poco tiempo!",
    stars: 4,
    name: "Carolina de la Vega",
    image: "Carolina-de-la-Vega"
  },
  {
    location: "Marrakech, Marruecos",
    tour: "Marruecos, España y Portugal",
    title: "Recorrido inolvidable",
    review: "Fue emocionante visitar la Alhambra en Granada y disfrutar de lo paisajes de Marruecos. En general, es la gira que nunca olvide.",
    stars: 5,
    name: "Julio Esquivel",
    image: "Julio-Esquivel"
  },
  {
    location: "Portugal",
    tour: "Marruecos, España y Portugal",
    title: "Itinerario perfecto y muy bien organizado",
    review: "Muy bien organizado, el itinerario no te apresura a ver todo en un día, sino que aprovechas al máximo tus días. No hubo ningún impase o retraso con los traslados y visitas, ¡sentía que siempre estaba en buenas manos!",
    stars: 4,
    name: "Lucía Belén Echeverría",
    image: "Lucia-Belen-Echeverria"
  },
  {
    location: "San Francisco, Estados Unidos",
    tour: "Sueños del Oeste",
    title: "Una experiencia variada",
    review: "Cada momento fue absolutamente increíble, en particular San Francisco y El Golden Gate. Fue genial la cantidad de actividades que realizar y tenía suficiente con tiempo para hacer actividades por mi propia cuenta.",
    stars: 5,
    name: "Ignacio Villaseñor De la Riva",
    image: "Ignacio-Villasenor-De-la-Riva"
  },
  {
    location: "Parque Nacional Sequoia, Estados Unidos",
    tour: "Sueños del Oeste",
    title: "El mix perfecto",
    review: "Sinceramente, excedió por mucho mis expectativas. Disfruté muchísimo del recorrido de parques, en especial las Sequoias Gigantes. El itinerario y las actividades están perfectamente planificadas, no hay nada de qué preocuparse.",
    stars: 5,
    name: "Carmen Laínez",
    image: "Carmen-Lainez"
  },
  {
    location: "Las Vegas, Estados Unidos",
    tour: "Sueños del Oeste",
    title: "Un viaje sin preocupaciones",
    review: "Me sorprende cuánto pude ver en unos pocos días; las noches de San Francisco y Las Vegas fueron lo mejor. Ideal para quienes desean experimentar la mezcla de naturaleza y ciudad.",
    stars: 4,
    name: "Rosario Sarmiento",
    image: "Rosario-Sarmiento"
  },
  {
    location: "Santorini, Grecia",
    tour: "Gran Turquía, Islas Griegas y Atenas",
    title: "Historia y belleza en cada parada",
    review: "La verdad no tenía idea de que íbamos a ver mala tanta cosa en tan poco tiempo. Santorini fue mi favorito, aquella vista y esas callesitas blancas. Bueno todo súper pensado, no me preocupé de nada.",
    stars: 5,
    name: "Aurora Linares",
    image: "Aurora-Linares"
  },
  {
    location: "Bodrum, Turquía",
    tour: "Gran Turquía, Islas Griegas y Atenas",
    title: "La esencia de Dubai en un tour",
    review: "Súper completo el tour, literal me llevé mil fotos y mil momentos únicos. La subida al castillo de bodrum parecía que me iba al pasado y obvio la comida en cada parada espectacular.",
    stars: 5,
    name: "Gaspar J. Montemayor",
    image: "Gaspar-J-Montemayor"
  },
  {
    location: "Pamukkale, Turquía",
    tour: "Gran Turquía, Islas Griegas y Atenas",
    title: "Recorrido esencial en Dubai",
    review: "El viaje estuvo bien organizado y cubrimos muchos lugares interesantes. Pamukkale y santorini una belleza. La verdad buena manera de conocer turquía y grecia.",
    stars: 4,
    name: "Ismael Arizmendi",
    image: "Ismael-Arizmendi"
  },
  {
    location: "Dubai, Emiratos Árabes Unidos",
    tour: "Dubai y Emiratos arabes",
    title: "Dubai auténtico y bien organizado",
    review: "Muy bien organizado todo. Las actividades fueron pensadas de manera adecuada y también eran diversas. Lo más especial fue conocer los zocos, algo que nunca había visto en otros viajes. Lo recomiendo si queres ver otra cara de Dubai.",
    stars: 5,
    name: "Fernanda Prieto",
    image: "Fernanda-Prieto"
  },
  {
    location: "Dubai, Emiratos Árabes Unidos",
    tour: "Dubai y Emiratos arabes",
    title: "Ideal para primer viaje Dubai",
    review: "¡Experiencias completas y bien organizadas como esta no hay! Recomiendo el paseo en Abra",
    stars: 4,
    name: "María Luján Quintana",
    image: "Maria-Lujan-Quintana"
  },
  {
    location: "Dubai, Emiratos Árabes Unidos",
    tour: "Dubai y Emiratos arabes",
    title: "Gracias Tour Experto",
    review: "Este tour es ideal para aquellos que visitamos por primera vez Dubai. Te lleva a lo esencial que tiene por ofrecer este lugar. Grandioso",
    stars: 5,
    name: "Catalina Arrieta",
    image: "Catalina-Arrieta"
  },
  {
    location: "Beijing, China",
    tour: "China Clásica",
    title: "Cultura china y paisajes únicos, un tour completo",
    review: "Cumplió con todas mis expectativas. La mezcla de historia, paisajes y compañía eran perfectos. Nunca pensé que aprendería tanto de la cultura china.",
    stars: 5,
    name: "Gullermina Vallejos",
    image: "Gullermina-Vallejos"
  },
  {
    location: "Gran Muralla, China",
    tour: "China Clásica",
    title: "Un sueño cumplido",
    review: "La Gran Muralla y los templos todo fue un sueño. Me sorprendí mucho con la gran cantidad de información que sabía el guía.",
    stars: 4,
    name: "Juan Mariscotti",
    image: "Juan-Mariscotti"
  },
  {
    location: "Yungang, China",
    tour: "China Clásica",
    title: "Un viaje redondo",
    review: "Todas las partes: cultura, historia y buenas personas en el grupo, fue increíble. No tenía idea de que un lugar como Yungang Cave existiera, ¡eso me impactó!",
    stars: 5,
    name: "Victoria Lúz Pedernera",
    image: "Victoria-Luz-Pedernera"
  },
  {
    location: "Munich, Alemania",
    tour: "Alemania",
    title: "Un tour lleno de historia",
    review: "Un viaje increíble para todo amante de la historia y paisajes hermosos. Múnich tuvo tanta energía positiva y los mercados tradicionales definitivamente fueron cosas impresionantes para ver: este es un tour que siempre recordaré",
    stars: 5,
    name: "Fabián Lanús",
    image: "Fabian-Lanus"
  },
  {
    location: "Goslar, Alemania",
    tour: "Alemania",
    title: "Un viaje de cuentos",
    review: "Cada parada en este increíble viaje fue como si hubieras viajado en el tiempo. Goslar y Quedlinburg No tuve ni idea de que existían: Cook, el guía, hizo un excelente trabajo explicando cada detalle.",
    stars: 4,
    name: "Luisa Ferreira",
    image: "Luisa-Ferreira"
  },
  {
    location: "Berlín, Alemania",
    tour: "Alemania",
    title: "Alemania vibrante y medieval",
    review: "Dicho sea de paso, este es realmente un tour completo. Lleva a los amantes a los lugares más emblemáticos de Alemania pero también a pequeños pueblos desconocidos que son simplemente sorprendentes. Me encantó la forma en que mencionan ciudades activas como Berlín y Múnich junto a pueblos medievales muy bonitos como Rothenburg y Goslar.",
    stars: 5,
    name: "Gustavo Viale",
    image: "Gustavo-Viale"
  }
]

// Función para generar las estrellas según la calificación
function generateStars(rating) {
  let starsHTML = '';
  for (let i = 0; i < 5; i++) {
    if (i < rating) {
      starsHTML += '<div class="star-s"></div>';
    } else {
      starsHTML += '<div class="star-r"></div>';
    }
  }
  return starsHTML;
}

// Función para generar todas las cards de reviews
function generateReviewCards(reviews, containerId) {
  const container = document.getElementById(containerId);
  if (!container) return;

  const reviewsHTML = reviews.map(review => {
    const template = `
          <article class="review-card">
              <div class="review-img" data-background='/images/${review.image}'
                  style="background-image: url('/content/img/reviews/${review.image}.webp');">
                  <span class="review-location">
                      <img src="/content/img/opiniones/icono-ubicacion.webp" alt="Icono de ubicación">
                      <p>${review.location}</p>
                  </span>
              </div>
              <div class="review-body">
                  <div class="review-location">
                      <img src="/content/img/opiniones/icono-mundo.webp" alt="Icono de mundo">
                      <p>${review.tour}</p>
                  </div>
                  <div>
                    <div>
                      <p class="review-title">${review.title}</p>
                      <p class="review-contenido">${review.review}</p>
                    </div>
                    <div class="review-autor">
                        <div class="califica-stars d_flex">
                            ${generateStars(review.stars)}
                        </div>
                        <p>${review.name}</p>
                        <div class="opinionVerif">
                            <div class="iconOpinionVerif"></div>
                            <p>Opinión verificada</p>
                        </div>
                    </div>
                  </div>
              </div>
          </article>
      `;
    return template.trim();
  }).join('');

  container.innerHTML = reviewsHTML;
}

// Inicializar las cards cuando el DOM esté listo
document.addEventListener('DOMContentLoaded', () => {
  // Asumiendo que reviews1 es el array de reviews que proporcionaste
  generateReviewCards(reviews1, 'reviews-container');
});

// Función para reordenar aleatoriamente el array
function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

function initializeProgressiveLoad() {
  const container = document.querySelector('#group-cards-2');
  const loadMoreBtn = document.getElementById('cargarMasBtn');
  const reviewsPerLoad = 6;
  let currentIndex = 0;

  // Reordenar array aleatoriamente
  const shuffledReviews = shuffleArray([...reviews2]);

  // Función para generar y añadir reviews
  function addReviews() {
    const reviewsToAdd = shuffledReviews.slice(currentIndex, currentIndex + reviewsPerLoad);

    reviewsToAdd.forEach(review => {
      const template = `
        <article class="review-card">
          <div class="review-img" data-background='/images/${review.image}'
            style="background-image: url('/content/img/reviews/${review.image}.webp');">
            <span class="review-location">
              <img src="/content/img/opiniones/icono-ubicacion.webp" alt="Icono de ubicación">
              <p>${review.location}</p>
            </span>
          </div>
          <div class="review-body">
            <div class="review-location">
              <img src="/content/img/opiniones/icono-mundo.webp" alt="Icono de mundo">
              <p>${review.tour}</p>
            </div>
            <div class="review-content">
              <div>
                <p class="review-title">${review.title}</p>
                <p class="review-contenido">${review.review}</p>
              </div>
              <div class="review-autor">
                <div class="califica-stars d_flex">
                  ${generateStars(review.stars)}
                </div>
                <p>${review.name}</p>
                <div class="opinionVerif">
                  <div class="iconOpinionVerif"></div>
                  <p>Opinión verificada</p>
                </div>
              </div>
            </div>
          </div>
        </article>
      `;
      container.insertAdjacentHTML('beforeend', template);
    });

    currentIndex += reviewsPerLoad;

    // Ocultar botón si no hay más reviews para cargar
    if (currentIndex >= shuffledReviews.length) {
      loadMoreBtn.style.display = 'none';
    }
  }

  // Cargar 12 reviews iniciales
  currentIndex = 0;
  for (let i = 0; i < 2; i++) {
    addReviews();
  }

  // Event listener para "Cargar más"
  loadMoreBtn.addEventListener('click', addReviews);
}

// Inicializar cuando el DOM esté listo
document.addEventListener('DOMContentLoaded', () => {
  initializeProgressiveLoad();
});

$(document).ready(function () {
  $('.sliderNovedades').slick({
    infinite: false,
    arrows: true,
    mobileFirst: true,
    dots: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: "<img class='prev-webinar arrows-webinar slick-prev' src='/content/img/home/prev-arrow-oferta.svg'/>",
    nextArrow: "<img class='next-webinar arrows-webinar slick-next' src='/content/img/home/next-arrow-webinar.svg'/>",
    responsive: [
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          centerPadding: '40px',
        }
      },
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 3,
          centerPadding: '40px',
        }
      },
    ]
  });
});

$(document).ready(function () {
  $('.ofertas-slider').slick({
    infinite: false,
    arrows: false,
    mobileFirst: true,
    dots: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    centerMode: true,
    responsive: [
      {
        breakpoint: 319,
        settings: {
          slidesToShow: 1,
        }
      },
      {
        breakpoint: 479,
        settings: {
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 599,
        settings: {
          slidesToShow: 3,
        }
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 3,
        }
      },
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 3.9,
          slidesToScroll: 1,
          centerMode: false,
          variableWidth: false,
          arrows: true,
          prevArrow: "<img class='prev-webinar arrows-webinar slick-prev' src='/content/img/home/prev-arrow-oferta.svg'/>",
          nextArrow: "<img class='next-webinar arrows-webinar slick-next' src='/content/img/home/next-arrow-webinar.svg'/>",
        }
      },
      {
        breakpoint: 1080,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          centerMode: false,
          variableWidth: false,
          arrows: true,
          prevArrow: "<img class='prev-webinar arrows-webinar slick-prev' src='/content/img/home/prev-arrow-oferta.svg'/>",
          nextArrow: "<img class='next-webinar arrows-webinar slick-next' src='/content/img/home/next-arrow-webinar.svg'/>",
        }
      },
    ],
  });
});

const sliderNovedades = document.querySelectorAll('.sliderNovedades');
sliderNovedades.forEach(slider => {
  const imgNovDeskElements = slider.querySelectorAll('.imgNovDesk');
  imgNovDeskElements.forEach(element => {
    element.remove();
  });
});

function adjustOfertasWidth() {
  const ofertasEspeciales = document.getElementById('ofertas-especiales');
  const ofertasSlides = document.querySelectorAll('.ofertas-slider .slide');

  if (window.innerWidth >= 1080) {
    const containerWidth = ofertasEspeciales.offsetWidth;
    const slideWidth = (containerWidth / 4) - 20;

    ofertasSlides.forEach(slide => {
      slide.style.width = `${slideWidth}px`;
      slide.style.maxWidth = `${slideWidth}px`;
    });
  }
}

window.addEventListener('resize', adjustOfertasWidth);
document.addEventListener('DOMContentLoaded', adjustOfertasWidth);