import { GH_API } from "./github-api";

export const REDES = [
    {
        name: 'Curriculum',
        url: GH_API.raw('FrancoJavierGadea.github.io', 'Currículum.pdf'),
        bi: 'file-earmark-pdf'
    },

    {
        name: 'linkedin',
        url: 'https://www.linkedin.com/in/franco-javier-alvarez'
    },

    {
        name: 'github',
        url: 'https://github.com/FrancoJavierGadea'
    },

    {
        name: 'whatsapp',
        url: 'https://wa.me/5493816065882'
    },

    {
        name: 'gmail',
        url: 'mailto:francogadea00@gmail.com',
        bi: 'envelope'//<-- bootstrap icon name
    },
]