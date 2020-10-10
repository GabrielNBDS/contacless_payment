class CustomComponent {
  static renderContent() {}

  static renderModal(body) {
    const modalOpener = document.createElement('button');
    modalOpener.id = 'myBtn';
    modalOpener.innerHTML = 'OPEN MODAL';
    body.appendChild(modalOpener);

    const modalBackgound = document.createElement('div');
    modalBackgound.id = 'myModal';
    modalBackgound.classList.add('modal');
    body.appendChild(modalBackgound);

    const modalContent = document.createElement('div');
    modalContent.classList.add('modal-content');
    modalBackgound.appendChild(modalContent);

    const modalCloseButton = document.createElement('span');
    modalCloseButton.classList.add('close');
    modalCloseButton.innerHTML = '&times';
    modalContent.appendChild(modalCloseButton);

    return modalContent;
  }

  static renderMobile() {
    const body = document.body;
    const main = document.createElement('main');
    body.appendChild(main);

    this.renderContent(main);

    const head = document.head;
    const style = document.createElement('link');
    style.id = 'mobile';
    style.rel = 'stylesheet';
    style.href = './mobile.css';
    head.appendChild(style);

    return document;
  }

  static renderDesktop() {
    const body = document.body;

    const modalContent = this.renderModal(body);

    this.renderContent(modalContent);

    const modalScript = document.createElement('script');
    modalScript.type = 'module';
    modalScript.src = '../../assets/js/modalHandler.js';
    body.appendChild(modalScript);

    const style = document.createElement('link');
    style.id = 'desktop';
    style.rel = 'stylesheet';
    style.href = './desktop.css';
    document.head.appendChild(style);

    return document;
  }

  static renderComponent() {
    if (window.innerWidth <= 400) {
      this.renderMobile();
    } else {
      this.renderDesktop();
    }
  }
}

export default CustomComponent;
