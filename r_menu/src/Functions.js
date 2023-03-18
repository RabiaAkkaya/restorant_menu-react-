import { yemek_baslik, yemek_foto,tatli_baslik,tatli_foto, icecek_foto, icecek,icecek_fiyat} from "./Diziler";
import { fiyat } from "./Diziler";
import Card from "./Card";
import ReactDOM from 'react-dom/client';


export var goster = (eleman) => {
  const stil = {
    display: 'inline-block',
    margin: '0 10px'
  };
  const icerik = ReactDOM.createRoot(document.getElementById("icerik"));
  if (eleman == "Yemekler") {

    icerik.render(
      <div className="p-4">
      <ul className="nav list-unstyled list-inline ">
        {yemek_baslik.map((bilgi, bilgi_index) =>
        (
          <Card
            foto={yemek_foto[bilgi_index]}
            urun={bilgi}
            fiyat={fiyat[bilgi_index]}
          />
        ))}

      </ul>
      </div>
    )
  }
  if(eleman=="Tatlılar")
  {
    icerik.render(
      <div className="p-4">
      <ul className="nav list-unstyled list-inline ">
        {tatli_baslik.map((bilgi, bilgi_index) =>
        (
          <Card
            foto={tatli_foto[bilgi_index]}
            urun={bilgi}
            fiyat={fiyat[bilgi_index]}
          />
        ))}

      </ul>
      </div>
    )

  }
  if(eleman=="İçecekler")
  {
    icerik.render(
      <div className="p-4">
      <ul className="nav list-unstyled list-inline ">
        {icecek.map((bilgi, bilgi_index) =>
        (
          <Card
            foto={icecek_foto[bilgi_index]}
            urun={bilgi}
            fiyat={icecek_fiyat[bilgi_index]}
          />
        ))}

      </ul>
      </div>
    )

  }
}
var toplam = 0;
var urunbaslik = [];
var urunfiyat = [];
export var sepeteEkle = (baslik, fiyat) => {
  urunbaslik.push([baslik]);
  urunfiyat.push([fiyat]);
  sessionStorage.setItem("urun", urunbaslik);
  sessionStorage.setItem("fiyat", urunfiyat);

  document.getElementById("sepet").innerHTML += baslik + ":" + fiyat + "</br>" + "</hr>";

  toplam += parseInt(fiyat);

  document.getElementById("toplamFiyat").innerHTML ="Toplam="+toplam+"TL";
  document.getElementById("cagri").style.display="";

}
export function garson()
{
  alert("Garson Geliyor!")
}



