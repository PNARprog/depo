const veriTabani = {
    fantastik: {
        "8-14": ["Harry Potter", "Percy Jackson"],
        "14-18": ["Ejderha Mızrağı", "Eragon"],
        "18-25": ["Yüzüklerin Efendisi","Zaman Çarkı"],
        "25+": ["Karanlık Orman","Silmarillion"]
               },
    bilim: {
        "8-14": ["Bilim Çocuk", "Minik Bilim Dergisi"],
        "14-18": ["Kozmos","Zamanın Kısa Tarihi"],
        "18-25": ["Astrofizik için Acele Etmeyin","Tüfek, Mikrop ve Tüfek"],
        "25+": ["Sapiens","Hoomo Deus"]
    },   
     roman: {
        "8-14": ["Şekern Portakalı","Küçük Prens"],
        "14-18": ["Uçurtma Avcısı","Simyacı"],
        "18-25": ["Kürk Mantolu Madonna","Martı"],
        "25+": ["Suç ve Ceza","Sefiller"]
    },  
     cocuk: {
        "8-14": ["Charlie'nin Çikolata Fabrikası","Kaptan Düşükdon"],
        "14-18": ["Alice Harikalar Diyarında","Define Adası"],
        "18-25": ["Masallar Derlemesi","Dede Korkut Hikayeleri"],
        "25+": ["Anderson Masalları","Dede Korkut Hikayeleri"]
    }     
           
};
function kitapOner()
{
    const tur = document.getElementById("tur").value;
    const yas = document.getElementById ("yas").value;
    const kitapListesi = veriTabani[tur][yas];
    const sonuc = document.getElementById("sonuc");
    if(kitapListesi && kitapListesi.length > 0){
        const rastgele= Math.floor(Math.random()* kitapListesi.length);
        sonuc.textContent=`KİTAP ÖNERİSİ: ${ kitapListesi [rastgele] }`;}
    else{
        sonuc.textContent="Uygun Kitap Bulunamadı";
    }
}
