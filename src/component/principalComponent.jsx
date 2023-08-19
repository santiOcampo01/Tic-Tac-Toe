import '../styles/PrincipalStyle.css'
import { Link } from 'react-router-dom'



export default function Triqui() {

   
    return (
        <div className="Truqi">
            <div>
                {console.log('hola')}
                <p className='NamePj1'>JUgador  1</p>
                <div>
                    <p>Tus victorias: 0</p>
                </div>
                <p className='Namepj2'>JUgador  2</p>
                <div>
                    <p>Tus victorias: 0</p>
                </div>

            </div>
           
            <div className='Follow'>
                <button>Seguir</button>
            </div>
            <div className='Reset'>
                <a href='./' >Reset</a> 
            </div>
        </div>
    );
}