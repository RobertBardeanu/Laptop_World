     const count = {}
          const elemente={}
      let p=0;
      const GesamtPreis=document.createElement("p")
      const Titel=document.createElement("h2")
      Titel.innerHTML="Warenkorb";
      Liste.appendChild(Titel)
      Liste.appendChild(GesamtPreis)
      
      const inWarenkorb=(name,preis)=>{
        const Produkt = document.createElement("p")
      if(count[name]==null){
      count[name]=1;
      elemente[name]=Produkt
      Produkt.innerHTML=count[name]+": "+name+" - "+preis+"€";
      Liste.appendChild(Produkt)
      }
      else{
        count[name]+=1;
        elemente[name].innerHTML=count[name]+":"+name+" - "+preis+"€";


      }
         Liste.appendChild(Produkt);

      p+=preis
      GesamtPreis.innerHTML=p+"€";
      
      }