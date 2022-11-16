import Image from 'next/image';
import Layout from '../../components/Layout';
import styles from '../../styles/Identificador.module.css'
import { Fecha } from '../../helpers';


export const getStaticPaths = async () => {
    const res = await fetch('http://localhost:1337/blogs');
    const data = await res.json()
    const paths = data.map(path =>{
        return{
            params: {id : path.id.toString()}
        }
    })
    //console.log(paths)
    return {
        paths: paths,
        fallback: false 
    }
}

export const getStaticProps = async (context) =>{
    const id = context.params.id;
    const res = await fetch('http://localhost:1337/blogs/' + id)
    const data = await res.json()
    //console.log(data.tiulo);

    return {
        props:{
            post : data
        }
    }
}
 


export const Identificador = ({post}) => {
    const{titulo, descripcion, contenido,imagen, published_at} = post

  return (
    <Layout>
        <div className={styles.post}>
            
                <div className={styles.imagen}>
                    <h1>{titulo}</h1>
                    <p>{Fecha(published_at)}</p>
                    <Image layaut='responsive' width={300} height={300} src={`http://localhost:1337${imagen.url}`}></Image>
                </div>
                <div className={styles.texto}>
                    <h3>{descripcion}</h3>
                    <p>{contenido}</p>
                    

                </div>
                
                
            

        </div>
        

    </Layout>
    
  )
}



export default Identificador 