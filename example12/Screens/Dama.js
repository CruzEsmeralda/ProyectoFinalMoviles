import React, {useContext,useState,useEffect} from 'react';
import {StyleSheet, Text, View, ScrollView} from 'react-native';
import {ListItem, Header} from 'react-native-elements';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {ZapatosContext} from '../Context/ZapatosContext';

const Dama = ({navigation}) => {

    const {lista,setZapatos,eliminar} = useContext(ZapatosContext);
    const [listaSelected, setListaSelected]= useState([]);

    useEffect(()=>{
        const temporal = lista.filter((selected)=>{
            return selected.genero==="Femenino";
        })
        setListaSelected(temporal)
    },[])
    return (
    
    <View style={styles.container}>
        <Header
            centerComponent={{ text: 'Dama', style: { color: '#fff', fontSize:20 } }}
            
            containerStyle={{backgroundColor:'#258902'}}
        />
        <ScrollView>
        {
            listaSelected.length>0
            ?
            listaSelected.map((a,i)=>(
                <ListItem key={i} bottomDivider>
                    <ListItem.Content>
                        <ListItem.Title>{a.descripcion}</ListItem.Title>
                        <ListItem.Subtitle>{a.genero}</ListItem.Subtitle>
                    </ListItem.Content>
                    <View style={styles.buttons}>
                        
                        <Ionicons name='md-create' size={30} color={'green'}  onPress={()=>{
                            setZapatos({
                                id:a.id.toString(),
                                genero:a.genero,
                                temporada:a.temporada,
                                talla:a.talla,
                                descripcion:a.descripcion,
                            })

                            navigation.navigate('Formulario',{status:"edit"})
                        }}/>

                    </View>
                </ListItem>

            ))
            :
            <Text style={{marginTop:50, textAlign:'center', fontSize:20}}>No hay Medidas</Text>


        }


        </ScrollView>


    </View>
    );
}
 
export default  Dama;

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        flex: 1,
    },
    buttons:{
        width:'25%', 
        flexDirection:'row', 
        justifyContent:'space-between'
    }
});