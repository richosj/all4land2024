
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
const buttons = document.querySelectorAll('[data-trigger="modal"]');

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
        const targetVideo = button.getAttribute('data-modal-type');
        //const modal = document.querySelector(target);
        const modal = document.querySelector(`[data-modal="${target}"]`);
        //alert(targetVideo)
        if (modal) {
            openModal(modal);

            if(targetVideo){
                const existingVideo = document.getElementById('dynamicVideo');
                const sourceSrc = button.getAttribute('data-source');
                if (existingVideo) {
                    existingVideo.parentNode.removeChild(existingVideo);
                }
                
                const video = document.createElement('video');
                video.id = 'dynamicVideo';
                video.controls = true; // 컨트롤러를 추가합니다.
    
                const source = document.createElement('source');
                source.src = sourceSrc; // 여기에 비디오 파일의 경로를 넣습니다.
                source.type = 'video/mp4'; // 비디오 파일의 타입
    
                // 비디오 태그에 소스 추가
                video.appendChild(source);
                document.getElementById('videoContainer').appendChild(video);
    
                video.play();
            }
            
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

window.addEventListener('resize', () =>{
    //console.log('Modal');
    if(window.innerWidth < 1240){
        document.querySelector('.alliance').classList.remove('active');
    }
})