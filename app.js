const fb='https://www.facebook.com/groups/814142860073541';
const action=`<a class="button" href="${fb}" target="_blank" rel="noopener noreferrer">到社團查看活動公告 ↗</a>`;
const contents={
yoga:`<p class="eyebrow">MOVEMENT / 從身體開始</p><h2 id="dialog-title">瑜伽與身體覺察</h2><p>透過瑜伽與動作體驗，把注意力帶回身體。留意自己的呼吸、姿勢與感受，在適合自己的範圍內探索。</p><h3>可以先留意什麼？</h3><p>查看活動公告中的適合對象、練習強度、服裝與攜帶物品。若有身體狀況或動作上的疑慮，請在報名前向主辦人確認。</p><p class="dialog-note">此頁介紹協會推廣方向。實際場次、師資、費用與參與條件以活動公告為準。</p>${action}`,
meditation:`<p class="eyebrow">AWARENESS / 給內心一點空間</p><h2 id="dialog-title">冥想與自我探詢</h2><p>把注意力帶回此刻，觀察念頭與感受，透過提問探索自己的反應。學習留意內在經驗，不急著為自己貼上標籤。</p><h3>參與前可以怎麼準備？</h3><p>先閱讀活動介紹，了解形式與內容；若不確定是否適合自己，可先聯繫主辦人討論。活動以覺察與放鬆為方向，無涉醫療行為。</p><p class="dialog-note">此頁介紹協會推廣方向。實際場次與參與條件以活動公告為準。</p>${action}`,
workshop:`<p class="eyebrow">CONNECTION / 在交流裡看見可能</p><h2 id="dialog-title">工作坊與共學</h2><p>以講座、體驗活動、舞蹈與讀書會等形式，提供多元的參與途徑。從不同主題出發，探索自我覺察與日常生活的關係。</p><h3>找到你有興趣的主題</h3><p>可以先從社團公告了解活動內容、帶領方式及適合對象，再選擇想參與的場次。分享與互動方式請以各場活動說明為準。</p><p class="dialog-note">此頁介紹協會推廣方向，並非一份已排定的開課清單。</p>${action}`,
charter:`<p class="eyebrow">協會資訊 / 章程節錄</p><h2 id="dialog-title">台灣身心合一發展推廣協會章程</h2><p>民國112年10月21日會員代表大會修正同日施行<br>民國113年03月17日會員代表大會修正同日施行</p><p class="dialog-note">本頁依協會提供內容，刊載第一章第一至三條；並非完整章程。</p><h3>第一章　總則</h3><h3>第一條</h3><p>本會名稱為台灣身心合一發展推廣協會（以下簡稱本會）。</p><h3>第二條</h3><p>本會為依法設立、非以營利為目的之公益性社會團體，以推動自我覺察、自我探詢達成自我療癒(以瑜伽、舞蹈和冥想等方式協助輔助放鬆，無涉醫療行為)。進而讓民眾了解個人身心狀況穩定的重要性，便能夠帶來整體社會安定為宗旨。</p><h3>第三條</h3><p>本會之任務如下，並依相關法令規定推動及執行：</p><ol><li>招收會員，推展會務，服務會員。</li><li>推動實體講座課程說明內在覺察與傳統心理學或宗教差異，並結合瑜珈提供相關理論與知識。</li><li>舉辦相關體驗活動或工作坊與讀書會等方式，讓民眾有較多元的渠道參與活動。</li><li>深入校園，結合學校課程內容，並將自我探詢覺察的知識與活動納入課堂，以提升學生身心穩定與專注度。</li><li>主動與社會上其它組織或企業合作，將自我覺察探詢等課程內容融入教育訓練當中，進而兼顧到員工身心發展平衡。</li><li>創造社會上各種團體之連結度，打破企業或組織間對立模式，以共好共存為任務目的。</li><li>與國際接軌，邀請國際講師舉辦相關活動。</li><li>透過課程培養身心靈及瑜伽老師。</li><li>其他符合本會宗旨相關事項。</li></ol>`,
inquiry:`<p class="eyebrow">讓第一步更簡單</p><h2 id="dialog-title">準備合作洽詢內容</h2><p>複製下方範本，填寫你已確定的資訊，再前往社團聯繫管理員。不確定的項目可以留待討論。</p><label for="inquiry-text">合作洽詢範本</label><textarea id="inquiry-text" class="inquiry-template">您好，我想洽詢協會的合作活動。\n\n單位名稱：\n合作類型：校園／企業／其他組織\n參與對象與預估人數：\n活動地點：\n預計日期與時長：\n希望討論的主題：\n期待達成的方向：\n方便聯繫的方式：</textarea><button class="button" id="copy-inquiry">複製洽詢範本 <span aria-hidden="true">↗</span></button><p id="copy-status" class="copy-status" role="status" aria-live="polite"></p><p class="dialog-note">此處只協助整理文字，不會傳送或儲存你的填寫內容。</p><a class="text-link" href="${fb}" target="_blank" rel="noopener noreferrer">前往協會社團，聯繫管理員 ↗</a>`,
sources:`<h2 id="dialog-title">內容與圖片來源</h2><h3>協會宗旨與任務</h3><p>依理事長提供之《台灣身心合一發展推廣協會章程》第一章第一至三條撰寫；提供版本載明民國113年03月17日修正同日施行。網站文案為導讀，章程節錄保留原文。</p><h3>協會社群與活動公告</h3><p><a class="source-link" href="${fb}" target="_blank" rel="noopener noreferrer">協會 Facebook 公開社團</a>，於2026年11月5日核對社團名稱及公開公告。過往工作坊來源：<a class="source-link" href="${fb}/permalink/1541401057347714/" target="_blank" rel="noopener noreferrer">《從情緒反應到生命重構》活動公告</a>。過往公告不代表目前開放報名。</p><h3>網站照片與視覺</h3><p>網站照片採用協會公開社團的實際活動紀錄，包含2025年公益瑜伽與銅鑼浴活動、年末公益課程與料理交流；相簿依活動分場，每張照片均附來源。未使用 AI 生成照片或圖庫情境照片。</p><p><a class="source-link" href="https://www.facebook.com/groups/814142860073541/permalink/1397147508439737/" target="_blank" rel="noopener noreferrer">活動原始貼文</a> · <a class="source-link" href="https://www.facebook.com/photo/?fbid=10162601844670353&set=g.814142860073541" target="_blank" rel="noopener noreferrer">團體合照來源</a></p><p>葉形識別為本網站設計圖形，非既有正式標誌。</p>`,
privacy:`<h2 id="dialog-title">隱私與使用說明</h2><p>本網站為協會介紹與活動資訊入口，未設置報名資料庫、付款功能、廣告追蹤或會員登入。</p><p>合作洽詢範本僅在你的瀏覽器中編輯；按下複製時會將文字放入裝置剪貼簿，不會送交協會。關閉視窗後不保留填寫內容。</p><p>活動報名及社團互動會前往 Facebook 或活動公告指定的平台，請留意該平台的隱私政策與資料使用方式。</p><p>字型由 Google Fonts 提供；瀏覽器載入外部資源時，相關服務可能收到一般連線資訊。網站託管服務亦可能保有基本存取紀錄。</p>`
};
const dialog=document.getElementById('info-dialog');let previousFocus;
function openDialog(key){if(!contents[key])return;previousFocus=document.activeElement;document.getElementById('dialog-content').innerHTML=contents[key];dialog.showModal();document.body.style.overflow='hidden';document.getElementById('close-dialog').focus();if(key==='inquiry'){document.getElementById('copy-inquiry').addEventListener('click',async()=>{const input=document.getElementById('inquiry-text');const status=document.getElementById('copy-status');try{await navigator.clipboard.writeText(input.value);status.textContent='已複製。請前往社團，將內容貼給管理員。';}catch{input.focus();input.select();status.textContent='請使用裝置的複製功能複製已選取的文字。';}});}}
document.querySelectorAll('[data-dialog]').forEach(button=>button.addEventListener('click',()=>openDialog(button.dataset.dialog)));
document.getElementById('close-dialog').addEventListener('click',()=>dialog.close());
dialog.addEventListener('click',event=>{if(event.target===dialog){const r=dialog.getBoundingClientRect();if(event.clientX<r.left||event.clientX>r.right||event.clientY<r.top||event.clientY>r.bottom)dialog.close();}});
dialog.addEventListener('close',()=>{dialog.classList.remove('photo-dialog');document.body.style.overflow='';document.getElementById('dialog-content').innerHTML='';previousFocus?.focus();});
const menu=document.querySelector('.menu');const nav=document.getElementById('navigation');
function closeMenu(){menu.setAttribute('aria-expanded','false');nav.classList.remove('open');}
menu.addEventListener('click',()=>{const opened=menu.getAttribute('aria-expanded')==='true';menu.setAttribute('aria-expanded',String(!opened));nav.classList.toggle('open',!opened);});
nav.querySelectorAll('a').forEach(a=>a.addEventListener('click',closeMenu));document.addEventListener('keydown',e=>{if(e.key==='Escape')closeMenu();});
const tabs=[...document.querySelectorAll('[role=tab]')];function selectTab(tab){tabs.forEach(t=>{const active=t===tab;t.setAttribute('aria-selected',String(active));t.tabIndex=active?0:-1;document.getElementById(t.getAttribute('aria-controls')).hidden=!active;});}
tabs.forEach((tab,i)=>{tab.addEventListener('click',()=>selectTab(tab));tab.addEventListener('keydown',e=>{let target;if(e.key==='ArrowRight'||e.key==='ArrowLeft')target=tabs[(i+1)%tabs.length];if(e.key==='Home')target=tabs[0];if(e.key==='End')target=tabs.at(-1);if(target){e.preventDefault();selectTab(target);target.focus();}});});
document.querySelectorAll('img').forEach(img=>img.addEventListener('error',()=>{img.parentElement.classList.add('failed-image');img.style.visibility='hidden';}));


const albumButtons = [...document.querySelectorAll('[data-album-photo]')];
let currentAlbum = [];
let photoIndex = 0;
function renderAlbumPhoto() {
  const button = currentAlbum[photoIndex];
  const thumbnail = button.querySelector('img');
  const album = button.closest('.event-album');
  const title = album.querySelector('summary strong').textContent;
  const source = button.dataset.source;
  contents.photo = `<h2 id="dialog-title">${title}</h2>
    <img class="lightbox-image" src="${thumbnail.getAttribute('src')}" alt="${thumbnail.alt}">
    <div class="album-controls"><button type="button" data-step="-1">← 上一張</button>
    <span role="status">${photoIndex + 1} / ${currentAlbum.length}</span>
    <button type="button" data-step="1">下一張 →</button></div>
    <a class="source-link" href="${source}" target="_blank" rel="noopener noreferrer">查看原始照片 ↗</a>`;
}
albumButtons.forEach(button => button.addEventListener('click', () => {
  currentAlbum = [...button.closest('.event-album').querySelectorAll('[data-album-photo]')];
  photoIndex = currentAlbum.indexOf(button);
  renderAlbumPhoto();
  dialog.classList.add('photo-dialog');
  openDialog('photo');
}));
function stepPhoto(delta) {
  photoIndex = (photoIndex + delta + currentAlbum.length) % currentAlbum.length;
  renderAlbumPhoto();
  document.getElementById('dialog-content').innerHTML = contents.photo;
  dialog.querySelector('[data-step="'+delta+'"]').focus();
}
dialog.addEventListener('click',event => {
  const control = event.target.closest('[data-step]');
  if (control) stepPhoto(Number(control.dataset.step));
});
dialog.addEventListener('keydown', event => {
  if (!dialog.classList.contains('photo-dialog')) return;
  if (['ArrowLeft','ArrowRight'].includes(event.key)) {
    event.preventDefault();
    stepPhoto(event.key === 'ArrowRight' ? 1 : -1);
  }
});
