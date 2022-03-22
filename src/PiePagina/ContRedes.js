import React from 'react';

export default function ContRedes(){
    return(
        <div className='redescont'>
            <a href='https://www.facebook.com/profile.php?id=100079472563768' target={"_blank"} rel="noreferrer" className='redesitems'><img className='redesitems__img' src="./RedesIMG/facebook.svg" alt="encuentra tu pagina web en nuestra red social, facebook" /></a>
            <a href='https://www.instagram.com/webs_arg/?hl=es-la' target={"_blank"} rel="noreferrer" className='redesitems'><img className='redesitems__img' src="./RedesIMG/instagram.svg" alt="encuentra tu pagina web en nuestra red social, instagram" /></a>
            <a href='https://nicolascomba2001.github.io/Portfolio/' target={"_blank"} rel="noreferrer" className='redesitems'><img className='redesitems__img' src="./RedesIMG/github.svg" alt="encuentra tu pagina web en nuestro portfolio, Github" /></a>
        </div>
    );
}