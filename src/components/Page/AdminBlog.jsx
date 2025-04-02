import MarkdownViewer from '../MarkdownViewer/MarkdownViewer';
import './AdminBlog.css'

const AdminBlog = () => {
    const markdownContent = `# Guía para Desarrolladores Junior: Construyendo una Base Sólida

Cuando comenzamos en el mundo del desarrollo de software, es fácil sentirse abrumado por la cantidad de tecnologías, lenguajes y frameworks que existen. Como desarrollador junior, es importante recordar que todos los expertos comenzaron exactamente donde tú estás ahora.

## Fundamentos primero

Antes de sumergirte en frameworks complejos o las últimas tendencias tecnológicas, asegúrate de dominar los fundamentos:

- **Entiende un lenguaje a profundidad**: En lugar de aprender varios lenguajes superficialmente, domina uno completamente. Comprende sus paradigmas, patrones y mejores prácticas.
- **Estructuras de datos y algoritmos**: Son la columna vertebral de la programación eficiente. Aprende cómo y cuándo utilizar arrays, listas enlazadas, árboles, etc.
- **Control de versiones**: Git no es opcional en el desarrollo moderno. Aprende a gestionar branches, resolver conflictos y colaborar con otros.

## Construye proyectos reales

El conocimiento teórico es importante, pero la experiencia práctica es invaluable:

- Comienza con proyectos pequeños pero completos
- Implementa características desde cero hasta producción
- Aprende a documentar tu código y escribir pruebas
- Comparte tu código en GitHub y acepta feedback

## Cultiva habilidades blandas

El desarrollo no es solo escribir código:

- Aprende a comunicar problemas técnicos de manera clara
- Practica dar y recibir code reviews constructivos
- Desarrolla la habilidad de estimar tareas y gestionar tu tiempo

## Encuentra mentores y comunidades

No tienes que aprender todo por tu cuenta:

- Únete a comunidades en Discord, Reddit o Stack Overflow
- Asiste a meetups locales o virtuales
- No tengas miedo de hacer preguntas (después de investigar por tu cuenta)

## Manejo del síndrome del impostor

Todos lo experimentamos, incluso los desarrolladores senior:

- Mantén un "diario de éxitos" donde registres lo que has aprendido y logrado
- Recuerda que compararte con desarrolladores experimentados no es justo para ti
- Celebra el progreso, no importa cuán pequeño parezca

## El aprendizaje es un maratón, no un sprint

El desarrollo de software es un campo en constante evolución. Adopta el aprendizaje continuo como parte de tu carrera, pero no te presiones para aprenderlo todo a la vez.

Recuerda: cada bug que solucionas y cada concepto que dominas te hace mejor desarrollador. La persistencia y la curiosidad te llevarán lejos en este camino.`;
    return (
        <div>
            <h1>Mi Nueva Página</h1>
            <MarkdownViewer content={markdownContent}/>
        </div>
    );
};

export default AdminBlog;