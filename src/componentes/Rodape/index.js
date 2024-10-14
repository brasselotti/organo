import './Rodape.css'

const Rodape = () => {
    return (
        <section className='footer'>
            <div className='footer-sociais'>
                <img src='/imagens/fb.png' alt='Logo Facebook'/>
                <img src='/imagens/tw.png' alt='Logo Twitter'/>
                <img src='/imagens/ig.png' alt='Logo Instagram'/>
            </div>
            <div className='footer-logo'>
                <img src='/imagens/logo.png' alt='Logo Organo'/>
            </div>
            <div className='footer-criador'>
                Desenvolvido por Fabiano
            </div>
        </section>
    )
}

export default Rodape