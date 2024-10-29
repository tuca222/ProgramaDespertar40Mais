import React, { useEffect, useState } from "react";

const VideoExplicativo = () => {
    const [iframeSrc, setIframeSrc] = useState("");
    const [divStyle, setDivStyle] = useState({});
    const [iframeStyle, setIframeStyle] = useState({});

    useEffect(() => {
        const ajustaIframeSrcEStyle = () => {
            const largura = window.innerWidth;
    
            if (largura < 830) {
                // setIframeSrc("https://www.youtube.com/embed/H-rY0cDLt8Y");
                setIframeSrc("https://www.youtube.com/embed/xIOYGxVYDog")
                setDivStyle({ aspectRatio: '1080 / 1920' });
                //setIframeStyle({ maxHeight: '700px' });
                setIframeStyle({ minHeight: '600px', minWidth: '400px' });
            } else {
                setIframeSrc("https://www.youtube.com/embed/rA5LzydX1lE");
                setDivStyle({ maxHeight: '600px' });
                setIframeStyle({ minHeight: '450px', minWidth: '800px' });
            }
                
        };

        // Chama a função quando o componente é montado
        ajustaIframeSrcEStyle();

        // Adiciona o evento de redimensionamento para ajustar o `src` ao mudar a largura da janela
        window.addEventListener('resize', ajustaIframeSrcEStyle);

        // Remove o listener quando o componente é desmontado para evitar vazamentos de memória
        return () => window.removeEventListener('resize', ajustaIframeSrcEStyle);
    }, []);;

    return (
        <div 
            className="flex justify-center relative mt-6 mb-6" 
            style={divStyle}
        >
            <iframe
                id="iframe-responsivo"
                title="Despertar 40+ - Vídeo Explicativo"
                src={iframeSrc}
                className="h-full rounded-lg shadow-lg object-cover w-full max-w-sm md:max-w-lg mx-auto"
                style={iframeStyle} 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                loading="lazy"
            >
            </iframe>
        </div>
    );
};

export default VideoExplicativo;