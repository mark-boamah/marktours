(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{19:function(e,t,n){e.exports=n(39)},25:function(e,t,n){},27:function(e,t,n){},39:function(e,t,n){"use strict";n.r(t);var a,r=n(0),i=n.n(r),o=n(7),s=n.n(o),l=(n(25),n(1)),d=n(2),m=n(4),u=n(3),c=n(5),p=(n(27),function(e){function t(){return Object(l.a)(this,t),Object(m.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(c.a)(t,e),Object(d.a)(t,[{key:"render",value:function(){var e=this;return i.a.createElement("div",{className:"App"},i.a.createElement("header",{className:"App-header"},i.a.createElement("img",{src:"marktours/images/mmt-logo.jpg",className:"App-logo",alt:"logo moet maar tevreden"}),i.a.createElement("p",null,"Moe maar tevreden"),i.a.createElement("button",{style:{width:"15em",marginBottom:"1em"},onClick:function(){return e.props.action("List")}},"List"),i.a.createElement("button",{style:{width:"15em"},onClick:function(){return e.props.action("GeneralMap")}},"General Map")))}}]),t}(r.Component)),g=n(8),h=function(e){function t(){var e,n;Object(l.a)(this,t);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(n=Object(m.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).list=g.curiosity,n.row=n.list.map(function(e){var t="marktours/images/small/".concat(e.image[0].first),a=" foto van ".concat(e.name);return[i.a.createElement("tr",null,i.a.createElement("td",null,i.a.createElement("img",{src:t,alt:a})),i.a.createElement("td",{id:"note"},i.a.createElement("h2",null,e.name),i.a.createElement("br",null),e.description),i.a.createElement("td",null,i.a.createElement("button",{onClick:function(){return n.props.action("Detail",e)}},"Detail")))]}),n}return Object(c.a)(t,e),Object(d.a)(t,[{key:"render",value:function(){return i.a.createElement("table",null,this.row)}}]),t}(r.Component),b=n(14),w=n(6),v=n.n(w),k=(n(13),n(15).a.div(a||(a=Object(b.a)(["\nwidth:",";\nheight:",""])),function(e){return e.width},function(e){return e.height})),E=function(e){function t(){return Object(l.a)(this,t),Object(m.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(c.a)(t,e),Object(d.a)(t,[{key:"componentDidMount",value:function(){var e=v.a.map("map");v.a.tileLayer("http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",{maxZoom:19,attribution:'\xa9 <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'}).addTo(e),e.setView([51.219135,4.396786],12),v.a.circle([this.props.data.latitude,this.props.data.longitude],{color:"cornflowerblue",fillColor:"cornflowerblue",fillOpacity:.3,radius:500}).openPopup().addTo(e).bindPopup("<h3>".concat(this.props.data.name,"</h3>"))}},{key:"render",value:function(){return i.a.createElement(k,{width:"100%",height:"500px",id:"map"})}}]),t}(r.Component),j=function(e){function t(){return Object(l.a)(this,t),Object(m.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(c.a)(t,e),Object(d.a)(t,[{key:"render",value:function(){var e=this,t="/images/big/".concat(this.props.data.image[0].first),n="/images/big/".concat(this.props.data.image[1].second),a="/images/big/".concat(this.props.data.image[2].third),r="Foto van ".concat(this.props.data.name);return i.a.createElement("main",{id:"detailMain"},i.a.createElement("header",null,i.a.createElement("h1",null,"Informatie over ",this.props.data.name,i.a.createElement("hr",null)),i.a.createElement("div",{id:"btnDetail"},i.a.createElement("button",{onClick:function(){return e.props.action("List")}},"List"),i.a.createElement("button",{onClick:function(){return e.props.action("Home")}},"Home"))),i.a.createElement("div",{className:"bigImg"},i.a.createElement("img",{id:"idimg",src:t,alt:r}),i.a.createElement("img",{id:"idimg",src:n,alt:r}),i.a.createElement("img",{id:"idimg",src:a,alt:r})),i.a.createElement("hr",null),i.a.createElement("br",null),i.a.createElement("h2",null,"Algemene info"),i.a.createElement("hr",null),i.a.createElement("ul",null,i.a.createElement("li",null,"type : ",this.props.data.type),i.a.createElement("li",null,"lengtegraad : ",this.props.data.longitude),i.a.createElement("li",null,"breedtegraad : ",this.props.data.latitude),i.a.createElement("li",null,"land : ",this.props.data.country),i.a.createElement("li",null,"stad : ",this.props.data.city)),i.a.createElement("br",null),i.a.createElement("h2",null,"Praktische info"),i.a.createElement("hr",null),i.a.createElement("ul",null,i.a.createElement("li",null,"Telefoon : ",this.props.data.info[0].telephone),i.a.createElement("li",null,"Website : ",this.props.data.info[1].website)),i.a.createElement("br",null),i.a.createElement("h2",null,"Openingsuren"),i.a.createElement("hr",null),i.a.createElement("ul",null,i.a.createElement("li",null,this.props.data.info[2].open)),i.a.createElement("br",null),i.a.createElement("h2",null,"Adres"),i.a.createElement("hr",null),i.a.createElement("ul",null,i.a.createElement("li",null,this.props.data.info[3].address)),i.a.createElement("br",null),i.a.createElement("h2",null,"Locatie op kaart"),i.a.createElement("hr",null),i.a.createElement("div",{id:"mapid"},i.a.createElement(E,{data:this.props.data})))}}]),t}(r.Component),f=function(e){function t(){return Object(l.a)(this,t),Object(m.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(c.a)(t,e),Object(d.a)(t,[{key:"render",value:function(){return i.a.createElement("div",{id:"map2"})}}]),t}(r.Component);delete v.a.Icon.Default.prototype._getIconUrl,v.a.Icon.Default.mergeOptions({iconRetinaUrl:n(36),iconUrl:n(37),shadowUrl:n(38)});var y=function(e){function t(){var e,n;Object(l.a)(this,t);for(var a=arguments.length,r=new Array(a),i=0;i<a;i++)r[i]=arguments[i];return(n=Object(m.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).list=g.curiosity,n}return Object(c.a)(t,e),Object(d.a)(t,[{key:"componentDidMount",value:function(){var e=v.a.map("map2");v.a.tileLayer("http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",{maxZoom:19,attribution:'\xa9 <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'}).addTo(e),e.setView([51.219135,4.396786],15),this.row=this.list.map(function(t){var n="".concat(t.latitude),a="".concat(t.longitude);return v.a.marker([n,a]).bindPopup("\n            <p>".concat(t.name,"<hr /></p>\n            <li>type : ").concat(t.type,"</li>\n            <li>lengtegraad : ").concat(t.longitude,"</li>\n            <li>breedtegraad : ").concat(t.latitude,"</li>\n            <li>land : ").concat(t.country,"</li>\n            <li>stad : ").concat(t.city,"</li>\n            ")).openPopup().addTo(e)})}},{key:"render",value:function(){var e=this;return[i.a.createElement("div",null,i.a.createElement(f,null,i.a.createElement(v.a,null,this.row,";"))),i.a.createElement("div",{className:"navi"},i.a.createElement("button",{onClick:function(){return e.props.action("List")}},"List"),i.a.createElement("button",{onClick:function(){return e.props.action("Home")}},"Home"))]}}]),t}(r.Component),A=function(e){function t(){var e,n;Object(l.a)(this,t);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(n=Object(m.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={commentaars:[]},n.routing=function(e,t){switch(e){case"Home":n.route=i.a.createElement(p,{action:n.handleClick});break;case"List":n.route=i.a.createElement(h,{action:n.handleClick});break;case"Detail":n.route=i.a.createElement(j,{action:n.handleClick,data:t,comment:n.state.commentaars});break;case"GeneralMap":n.route=i.a.createElement(y,{action:n.handleClick,data:t,comment:n.state.commentaars});break;case"DetailAddComment":var a=JSON.parse(localStorage.getItem("commentList"));a=a?a.concat(t):[t],localStorage.setItem("commentList",JSON.stringify(a)),n.route=i.a.createElement(j,{action:n.handleClick,data:t});break;default:n.route=i.a.createElement(p,{action:n.handleClick})}n.setState({action:n.route})},n.handleClick=function(e,t){n.routing(e,t)},n.route=i.a.createElement(p,{action:n.handleClick}),n}return Object(c.a)(t,e),Object(d.a)(t,[{key:"render",value:function(){return this.route}}]),t}(r.Component);s.a.render(i.a.createElement(A,null),document.getElementById("root"))},8:function(e){e.exports={api:"mmt - toeristApp",title:"Bezinswaardigheden in Antwerp",code:"mmtBezinswaardigheid",updated:"2019-01-08T19:58:42.949Z",curiosity:[{key:"1",name:"Koninklijk Museum voor Schone Kunsten",image:[{first:"royal.jpg"},{second:"royal2.jpg"},{third:"royal3.jpg"}],comment:[{username:[]},{usercomment:[]}],type:"museum",latitude:51.20499918,longitude:4.390165106,country:"Belgie",region:"Antwerpen",departement:"Toerisme",city:"Antwerp",info:[{telephone:"+32 (0)3 224 95 50"},{website:"http://www.kmska.be"},{open:"Wegens werkzaamheden gesloten (heropening in 2019)"},{address:"LEOPOLD DE WAELPLAATS, 2000 ANTWERPEN"}],description:"Het Koninklijk Museum voor Schone Kunsten bevindt zich een gebouw uit de 19"},{key:"2",name:"Gildekamersstraat",image:[{first:"gilderkamersstraat.jpg"},{second:"gilderkamersstraat2.jpg"},{third:"gilderkamersstraat3.jpg"}],comment:[{username:[]},{usercomment:[]}],type:"oude straat",latitude:51.221386,longitude:4.398942,country:"Belgie",region:"Antwerpen",departement:"Toerisme",city:"Antwerp",info:[{telephone:"N/A"},{website:"N/A"},{open:"24 urr geopend"},{address:"GILDERKAMERSSTRAAT 2000 ANTWERPEN"}],description:"De smalle en pittoreske Gildekamerstraat, achter het Stadhuis, kenmerkt zich door fraaie oude huizen"},{key:"3",name:"Brabo's fontein",image:[{first:"brabo.jpg"},{second:"brabo2.jpg"},{third:"brabo3.jpg"}],comment:[{username:[]},{usercomment:[]}],type:"fontein",latitude:51.220117,longitude:4.396364,country:"Belgie",region:"Antwerpen",departement:"Toerisme",city:"Antwerp",info:[{telephone:"N/A"},{website:"N/A"},{open:"24 uur geopend"},{address:"GROTE MARKT 2000 ANTWERPEN"}],description:"Deze fontein uit 1887, een hartstochtelijk kunstwerk van Jef Lambeaux, herinnert aan Silvius Brabo, de legendarische Romeinse krijger die de hand afhakte van de reus Druoon Antigoon, een plunderaar die over de Schelde voer. Het water stroomt rechtstreeks over de plavuizen van het plein."},{key:"4",name:"Onze-lieve vrouw kathedral",image:[{first:"kathedral.jpg"},{second:"kathedral2.jpg"},{third:"kathedral3.jpg"}],comment:[{username:[]},{usercomment:[]}],type:"gebouw",latitude:51.220302,longitude:4.401448,country:"Belgie",region:"Antwerpen",departement:"Toerisme",city:"Antwerp",info:[{telephone:"+3232139951"},{website:"http://www.dekathedraal.be"},{open:"Ma-za 10.00-17.00 (za 15.00), zo 13.00-16.00 - gesloten op 1 jan en tijdens dienste"},{address:"GROENPLAATS 21, 2000 ANTWERPEN"}],description:"Dit prachtige voorbeeld van gotische bouwkunst, met zijn enorme klokkentoren, is met zijn grondoppervlakte van \xe9\xe9n hectaar het grootste monument van Belgi\xeb. De bouw begon in 1352 en eindigde pas in 1521. Vele beroemde architecten werkten eraan mee: J. Van Thienen, J. en P. Appelmans, J. Tac, E. Spoorwater, H. en D. de Waghemakere en R. Keldermans. Het geheel vormt niettemin een duidelijke eenheid."},{key:"5",name:"Handschoenmarkt",image:[{first:"handschoenmarkt.jpg"},{second:"handschoenmarkt2.jpg"},{third:"handschoenmarkt3.jpg"}],comment:[{username:[]},{usercomment:[]}],type:"markt",latitude:51.220568,longitude:4.399787,country:"Belgie",region:"Antwerpen",departement:"Toerisme",city:"Antwerp",info:[{telephone:"N/A"},{website:"N/A"},{open:"N/A"},{address:"HANDSCHOENMARKT 2000 ANTWERPEN"}],description:"Op dit driehoekige plein, tegenover de kathedraal, werd vroeger een handschoenmarkt gehouden. Rondom het plein bevinden zich mooie, sfeervolle panden. De aan Quinten Matsys toegeschreven put kenmerkt zich door een sierlijk bovenstuk van smeedijzer, met daarboven de legendarische krijger Brabo die de hand toont van de reus die de matrozen op de Schelde terroriseerde."},{key:"6",name:"Stadshuis",image:[{first:"stadhuis.jpg"},{second:"stadhuis2.jpg"},{third:"stadhuis3.jpg"}],comment:[{username:[]},{usercomment:[]}],type:"gebouw/politicus",latitude:51.221047,longitude:4.400406,country:"Belgie",region:"Antwerpen",departement:"Toerisme",city:"Antwerp",info:[{telephone:"+32320103"},{website:"https://www.antwerpen.be/nl/overzicht/stadhuis-van-antwerpen"},{open:"Neem voor een bezoek contact op met Antwerpen Toerisme via +32320103"},{address:"GROTE MARKT 1, 2000 ANTWERPEN"}],description:"Het stadhuis werd in 1564 gebouwd door Cornelis Floris. De lange gevel (76 m) is een fraaie aaneenschakeling van elementen uit zowel de Vlaamse (dakvensters, puntgevels) als de Italiaanse Renaissance (loggia, pilasters tussen de ramen, nissen). De indeling van de hoge dubbellichtramen oogt wat streng, maar het geheel wordt opgefleurd door de versiering in het middengedeelte. Het interieur is in de 19"},{key:"7",name:"Plantin-Moretus museum",image:[{first:"plantin-moretus.jpg"},{second:"plantin-moretus2.jpg"},{third:"plantin-moretus3.jpg"}],comment:[{username:[]},{usercomment:[]}],type:"museum",latitude:51.218565,longitude:4.398529,country:"Belgie",region:"Antwerpen",departement:"Toerisme",city:"Antwerp",info:[{telephone:"+3232211450"},{website:" http://www.museumplantinmoretus.be"},{open:"Di-zo (en 2e Paasdag en 2e Pinksterdag) 10.00-17.00 - gesloten op 1-2 jan, 1 mei, Hemelvaart, 1-2 nov, 25-26 dec"},{address:"VRIJDAGMARKT 22-23, 2000 ANTWERPEN"}],description:"Dit museum behoort sinds 2005 tot het Unesco Werelderfgoed en werd in 2016 gerenoveerd. Het bevindt zich in het huis en de drukkerij van de beroemde Christoffel Plantijn. De oude meubelstukken, de wandtapijten, de goudleerbekleding, de schilderijen, de oude persen, de prenten, de gravuren, de zeldzame manuscripten en drukken geven een indruk van de geschiedenis van het humanisme, van de boekdrukkunst en van het oude boek in de Nederlanden tijdens de 16"},{key:"8",name:"Nationaal scheepvaart museum",image:[{first:"scheepvaart.jpg"},{second:"scheepvaart2.jpg"},{third:"scheepvaart3.jpg"}],comment:[{username:[]},{usercomment:[]}],type:"museum",latitude:51.220686,longitude:4.395493,country:"Belgie",region:"Antwerpen",departement:"Toerisme",city:"Antwerp",info:[{telephone:"032028380"},{website:"N/A"},{open:"N/A"},{address:"STEENPLEIN 1, 2000 ANTWERPEN"}],description:"De tentoonstelling bevindt zich in Het Steen, dat vanaf 843 werd gebouwd op de oever van de Schelde om de nieuwe, door het Verdrag van Verdun bepaalde grens te bewaken. Een historisch belangrijke presentatie over de geschiedenis van de scheepvaart en de zeevaart van vroeger tot nu."},{key:"9",name:"St-Carolus Borromeuskerk",image:[{first:"st-carolus.jpg"},{second:"st-carolus2.jpg"},{third:"st-carolus3.jpg"}],comment:[{username:[]},{usercomment:[]}],type:"gebouw",latitude:51.221234,longitude:4.404476,country:"Belgie",region:"Antwerpen",departement:"Toerisme",city:"Antwerp",info:[{telephone:"+3232313751"},{website:"carolusborromeus.com"},{open:"Ma-za 10.00-12.30, 14.00-17.00 (niet tijdens diensten"},{address:"HENDRIK CONSCIENCEPLEIN 11, 2000 ANTWERPEN"}],description:"Deze door de jezu\xefeten Aguilon en Huyssens gebouwde Sint-Ignatius-kerk werd later omgedoopt tot de St.-Carolus Borromeus-kerk"},{key:"10",name:"Rubenhuis",image:[{first:"rubenhuis.jpg"},{second:"rubenhuis2.jpg"},{third:"rubenhuis3.jpg"}],comment:[{username:[]},{usercomment:[]}],type:"museum",latitude:51.217431,longitude:4.409048,country:"Belgie",region:"Antwerpen",departement:"Toerisme",city:"Antwerp",info:[{telephone:"+3232011555"},{website:"http://www.rubenshuis.be"},{open:"Di-zo (en 2e Paasdag en 2e Pinksterdag) 10.00-17.00 - gesloten op 1-2 jan, 1 mei, Hemelvaart, 1-2 nov en 25-26 dec"},{address:"WAPPER 9-11, 2000 ANTWERPEN"}],description:"Dit huis geeft een prachtig beeld van het leven en de geest van Rubens, wiens kunstwerken overal aanwezig zijn in Antwerpen. Het huis is in 1610 gekocht door de schilder, \xe9\xe9n jaar na zijn huwelijk met Isabelle Brandt. Hij leefde er vele jaren en veranderde het langzamerhand in een waar paleis. In dat paleis bevond zich zijn grote atelier. Met zijn tweede vrouw H\xe9l\xe8ne Fourment bracht hij hier zijn acht kinderen groot."},{key:"11",name:"Bourlaschouwburg",image:[{first:"schouwburg.jpg"},{second:"schouwburg2.jpg"},{third:"schouwburg3.jpg"}],comment:[{username:[]},{usercomment:[]}],type:"schouwburg",latitude:51.216179,longitude:4.406147,country:"Belgie",region:"Antwerpen",departement:"Toerisme",city:"Antwerp",info:[{telephone:"03 224 88 00"},{website:"https://www.toneelhuis.be"},{open:"Ma - Vr 10:00 tot 18:00"},{address:"Komedieplaats 18, 2000 Antwerp"}],description:"De naam van dit neoclassicistische gebouw is een eerbetoon aan de ontwerper ervan, Pierre Bruno Bourla. Tussen de zuilen van de gevels bevinden zich de borstbeelden van auteurs en componisten. Boven de attiek ziet u de musen die samen met Apollo de bezoekers begroeten. Het plafond van de eerste hal is door Antwerpenaar Jan Van Riet versierd."},{key:"12",name:"Centraal station",image:[{first:"central-station.jpg"},{second:"central-station2.jpg"},{third:"central-station3.jpg"}],comment:[{username:[]},{usercomment:[]}],type:"station",latitude:51.218137,longitude:4.420627,country:"Belgie",region:"Antwerpen",departement:"Toerisme",city:"Antwerp",info:[{telephone:"N/A"},{website:"http://www.belgianrail.be/"},{open:"Ma - Zon 05:45 tot 22:00"},{address:"KONINGIN ASTRIDPLEIN, 27 2018 ANTWERPEN"}],description:"Het centraal station, naast de dierentuin, stamt uit 1905. Het is volgens een ontwerp van L. de La Censerie gebouwd met twee monumentale gevels in neobarok stijl en een enorme, 60 m hoge, koepel die van veraf al te zien is. Het station is verbouwd om de Thalys te kunnen ontvangen op ultramoderne ondergrondse perrons. Dat gaf het station van Antwerpen, een spoorwegkathedraal, een eigentijds tintje en een spectaculair aspect."},{key:"13",name:"Dierentuin",image:[{first:"zoo.jpg"},{second:"zoo2.jpg"},{third:"zoo3.jpg"}],comment:[{username:[]},{usercomment:[]}],type:"zoo",latitude:51.217685,longitude:4.421661,country:"Belgie",region:"Antwerpen",departement:"Toerisme",city:"Antwerp",info:[{telephone:"+3232024540"},{website:"http://www.zooantwerpen.be"},{open:"Mrt-apr en okt: 10.00-17.30; mei-jun en sept: 10.00-18.00; jul-aug: 10.00-19.00; nov-febr: 10.00-16.45"},{address:"KONINGIN ASTRIDPLEIN 26, 2000 ANTWERPEN"}],description:"Dit park met bomen en bloemen ligt tussen het centraal station het natuurhistorisch museum. Het beslaat 11 hectare en huisvest ongeveer 5.000 dieren van allerlei soorten. Daaronder ook enkele uiterst zeldzame diersoorten, zoals de witte neushoorn en de okapi. De vele paviljoens (planetarium, Aquaforum) maken het bezoek nog aangenamer. De Skywalk is een hooggelegen wandelpad, met bloemen, dat over de omheiningen heen loopt. Het werd in 2016 geopend."},{key:"14",name:"Red Star Line Museum",image:[{first:"redstar.jpg"},{second:"redstar2.jpg"},{third:"redstar3.jpg"}],comment:[{username:[]},{usercomment:[]}],type:"museum",latitude:51.233028,longitude:4.403362,country:"Belgie",region:"Antwerpen",departement:"Toerisme",city:"Antwerp",info:[{telephone:"03 298 27 70"},{website:"https://www.redstarline.be"},{open:"Open van di tot zo 10 - 17 u. Van 1 april tot 1 november: za en zo 10 - 18 u."},{address:"MONTEVIDEOTRAAT 3, 2000 ANTWERPEN"}],description:"Het Red Star Line Museum is opgebouwd uit verhalen van mensen die met de schepen van de rederij naar Amerika of Canada zijn gereisd. Centraal staan zes getuigen, onder wie Albert Einstein en Irving Berlin. De hoofdtentoonstelling voert de bezoeker langs de verscheidene reisetappes vanaf het reisbureau in Warschau tot het nieuwe leven in de Verenigde Staten. Het doel is om een indruk te geven van de zware tocht die een Europese landverhuizer moest afleggen om een betere toekomst tegemoet te kunnen gaan. Het laatste deel van de tentoonstelling verbindt het verleden met het heden om aan te tonen dat migratie een universeel en tijdloos gegeven is."},{key:"15",name:"Museum aan de stroom",image:[{first:"mas.jpg"},{second:"mas2.jpg"},{third:"mas3.jpg"}],comment:[{username:[]},{usercomment:[]}],type:"museum",latitude:51.227997,longitude:4.4047,country:"Belgie",region:"Antwerpen",departement:"Toerisme",city:"Antwerp",info:[{telephone:"03 338 44 00"},{website:"https://www.mas.be"},{open:"Dinsdag tot Zondag 10:00 - 17:00"},{address:"HANZESTEDENPLAATS 1, 2000 ANTWERPEN"}],description:"Het MAS, of Museum aan de Stroom, is een museum in Antwerpen dat in mei 2011 opende. Het museum is gelegen in de oude haven op het Eilandje. Het grondoppervlakte van het museumgebouw bedraagt 1.350 m\xb2, op een totale oppervlakte van 14.500 m\xb2"}]}}},[[19,2,1]]]);
//# sourceMappingURL=main.e1b8ea69.chunk.js.map