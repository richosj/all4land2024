
const alignces = document.querySelector('.special-links a');
const aligncesClose = document.querySelector('.alliance--close');

alignces.addEventListener('click', () => {
    const allianceModal = document.querySelector('.alliance');
    allianceModal.classList.add('active')
});
aligncesClose.addEventListener('click', () => {
    const allianceModal = document.querySelector('.alliance');
    allianceModal.classList.remove('active')
});


// 모든 버튼 요소를 선택합니다.
const buttons = document.querySelectorAll('button[data-trigger="modal"]');

// 모달 열기 함수
const openModal = (modal) => {
    modal.classList.add('active')
};

// 모달 닫기 함수
const closeModal = (modal) => {
    modal.classList.remove('active')
};

// 버튼 클릭 이벤트 리스너를 추가합니다.
buttons.forEach(button => {
    button.addEventListener('click', () => {
        const target = button.getAttribute('data-target');
        //const modal = document.querySelector(target);
        const modal = document.querySelector(`[data-modal="${target}"]`);
        
        if (modal) {
            openModal(modal);
            // 모달 닫기 버튼 이벤트 리스너를 추가합니다.
            const closeButton = modal.querySelector('.modal__close');
            if (closeButton) {
                closeButton.addEventListener('click', () => closeModal(modal));
            }

            // 모달 외부 클릭 시 닫기 이벤트 리스너를 추가합니다.
            window.addEventListener('click', (event) => {
                if (event.target === modal) {
                    closeModal(modal);
                }
            });
        }
    });
});