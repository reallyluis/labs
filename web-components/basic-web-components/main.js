import PageTitle from './src/PageTitle.js';
import PageSection from './src/PageSection.js';
import { Draggable, Droppable } from './src/DragAndDrop.js';

window.customElements.define('page-title', PageTitle);
window.customElements.define('page-section', PageSection);
window.customElements.define('drop-container', Droppable);
window.customElements.define('drag-element', Draggable);
