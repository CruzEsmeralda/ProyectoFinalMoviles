import React, {createContext, useState,useEffect} from 'react';
import firebase from '../Settings/ConfigFirebase';

export const ZapatosContext = createContext();


const ZapatosProvider = (props)=>{
    const [zapatos, setZapatos] = useState({
        id:"",
        genero:"",
        temporada:"",
        talla:"",
        descripcion:""
    })

    const [lista, setLista]= useState([
       
    ]);
    
    useEffect(()=>{
        firebase.database().ref('Zapatos').on('value', snapshot=>{
            let ZapatosLista=[];
            snapshot.forEach(row=>{
                ZapatosLista.push({
                    id:row.key,
                    genero:row.val().genero,
                    temporada:row.val().temporada,
                    talla:row.val().talla,
                    descripcion:row.val().descripcion
                })
            })
            setLista(ZapatosLista)
        })
    },[])




    const eliminar =(id)=>{
        firebase.database().ref('Zapatos/'+id).set(null).then(()=>{
            alert("Eliminado")
        })

        const temporal = lista.filter((item)=>{
            return item.id!== id;
        })
        setLista(temporal)
    }

    
    return(
        <ZapatosContext.Provider
         value={{
                zapatos,
                lista,
                setZapatos,
                setLista,
                eliminar
            }}
        >
            {props.children}

        </ZapatosContext.Provider>
    )
}

export default ZapatosProvider;