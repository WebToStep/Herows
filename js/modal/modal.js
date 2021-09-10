export class Modal {
    constructor(
        //  modal wrap selector
        wrap
    ) {
        if (!this.wrap) {
            this.wrap = document.createElement('div');
            document.body.append(this.wrap);
            this.wrap.className = "modal fade";
        } else {
            this.wrap = document.querySelector(wrap);
        }
    }

    init(title, body) {
        this.renderHtml(title, body);
        this.showModal();
        this.wrap.addEventListener('click', event => {
            const target = event.target;
            if (target.className === 'modal' ||
         target.parentNode.className === 'close' ||
         target.classList.contains('btn-secondary')) {
                this.hideModal();
            }
        });
    }
    renderHtml(title, body) {
        this.wrap.innerHTML = `
               <div class="modal-dialog modal-dialog-centered" role="document">
                  <div class="modal-content">
                     <div class="modal-header">
                        <h5 class="modal-title" id="exampleModalLabel">${title}</h5>
                        <button class="close" type="button" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">×</span>
                        </button>
                     </div>
                     <div class="modal-body">
                        ${body}
                     </div>
                     <div class="modal-footer">
                        <button class="btn btn-secondary" type="button" data-dismiss="modal">Close</button>
                     </div>
                  </div>
                </div>
                `;

    }
    showModal() {
        this.wrap.style.display = 'block';
        this.wrap.classList.remove('fade');
    }
    hideModal() {
        this.wrap.classList.add('fade');
        this.wrap.style.display = 'none';
    }
}
