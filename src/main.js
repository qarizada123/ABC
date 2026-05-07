import React from 'https://esm.sh/react@19.2.3';
import { createRoot } from 'https://esm.sh/react-dom@19.2.3/client';
import './styles.css';

const h = React.createElement;

const chapters = [
  { id: 1, name: 'الفاتحه', persian: 'گشایش', verses: 7, place: 'مکی', tone: 'شفاف و الهام‌بخش' },
  { id: 2, name: 'البقره', persian: 'گاو', verses: 286, place: 'مدنی', tone: 'جامع‌ترین سوره احکام' },
  { id: 18, name: 'الکهف', persian: 'غار', verses: 110, place: 'مکی', tone: 'داستان، ایمان و بصیرت' },
  { id: 36, name: 'یس', persian: 'یاسین', verses: 83, place: 'مکی', tone: 'قلب قرآن' },
];

const reciters = ['مشاری العفاسی', 'عبدالباسط عبدالصمد', 'منشاوی', 'سعد الغامدی'];
const languages = ['فارسی', 'English', 'العربية', 'Türkçe', 'اردو', 'Indonesia'];

const features = [
  { title: 'تلاوت هوشمند', text: 'پخش آیه‌به‌آیه، تکرار حفظ، کنترل سرعت و حالت تمرکز برای جلسات طولانی.' },
  { title: 'ترجمه چندزبانه', text: 'طراحی شده برای مخاطب جهانی با مسیر سریع انتخاب زبان، تفسیر و آوانویسی.' },
  { title: 'کتابخانه موضوعی', text: 'دسته‌بندی آیات بر اساس صبر، خانواده، تجارت، اخلاق، دعا و سبک زندگی.' },
  { title: 'برنامه حفظ', text: 'تقویم حفظ، مرور فاصله‌دار، نشان‌های پیشرفت و یادآوری روزانه بدون نیاز به بک‌اند.' },
];

function Header() {
  return h('header', { className: 'topbar' },
    h('a', { className: 'brand', href: '#home', 'aria-label': 'Quran Global home' },
      h('span', { className: 'brand-mark' }, 'ق'),
      h('span', null,
        h('strong', null, 'Quran Global'),
        h('small', null, 'مصاحف آنلاین حرفه‌ای'),
      ),
    ),
    h('nav', { className: 'nav-links', 'aria-label': 'ناوبری اصلی' },
      h('a', { href: '#reader' }, 'مطالعه'),
      h('a', { href: '#audio' }, 'صوت'),
      h('a', { href: '#plans' }, 'برنامه‌ها'),
      h('a', { href: '#global' }, 'جهانی'),
    ),
    h('a', { className: 'nav-cta', href: '#reader' }, 'شروع تلاوت'),
  );
}

function Hero() {
  return h('section', { className: 'hero section-grid' },
    h('div', { className: 'hero-copy' },
      h('p', { className: 'eyebrow' }, 'پلتفرم استاتیک، سریع و RTL'),
      h('h1', null, 'تجربه‌ای جهانی برای خواندن، شنیدن و تدبر در قرآن کریم'),
      h('p', { className: 'hero-text' }, 'یک رابط React کاملاً استاتیک و حرفه‌ای با طراحی مناسب موبایل، دسکتاپ، حالت شب، کارت‌های سوره، تلاوت قاریان برجسته و بخش‌های کامل برای محصولی در سطح بین‌المللی.'),
      h('div', { className: 'hero-actions' },
        h('a', { className: 'primary-btn', href: '#reader' }, 'ورود به مصحف'),
        h('a', { className: 'secondary-btn', href: '#features' }, 'مشاهده امکانات'),
      ),
      h('div', { className: 'stats', 'aria-label': 'آمار نمونه محصول' },
        h('span', null, h('strong', null, '۱۱۴'), ' سوره'),
        h('span', null, h('strong', null, '۶+'), ' زبان'),
        h('span', null, h('strong', null, '۴'), ' قاری منتخب'),
      ),
    ),
    h('div', { className: 'mushaf-card', 'aria-label': 'نمونه صفحه مصحف' },
      h('div', { className: 'card-topline' }, h('span', null, 'سوره الرحمن'), h('span', null, '۵۵')),
      h('p', { className: 'arabic-verse' }, 'فَبِأَيِّ آلَاءِ رَبِّكُمَا تُكَذِّبَانِ'),
      h('p', { className: 'translation' }, 'پس کدام یک از نعمت‌های پروردگارتان را انکار می‌کنید؟'),
      h('div', { className: 'player' },
        h('button', { 'aria-label': 'پخش تلاوت' }, '▶'),
        h('div', { className: 'progress' }, h('span')),
        h('small', null, '02:18'),
      ),
    ),
  );
}

function SearchPanel() {
  return h('section', { className: 'search-panel', 'aria-label': 'جستجوی قرآن' },
    h('div', null,
      h('span', { className: 'section-kicker' }, 'جستجوی سریع'),
      h('h2', null, 'سوره، آیه، ترجمه یا موضوع را پیدا کنید'),
    ),
    h('label', { className: 'search-box' },
      h('span', null, '🔎'),
      h('input', { type: 'search', placeholder: 'مثلاً: یس، آیه الکرسی، صبر، رحمت' }),
    ),
  );
}

function Reader() {
  return h('section', { id: 'reader', className: 'section-block' },
    h('div', { className: 'section-heading' },
      h('span', { className: 'section-kicker' }, 'مصحف دیجیتال'),
      h('h2', null, 'دسترسی سریع به سوره‌های منتخب'),
      h('p', null, 'کارت‌ها برای توسعه آینده به داده واقعی API یا فایل JSON آماده هستند اما این نسخه کاملاً استاتیک است.'),
    ),
    h('div', { className: 'chapter-grid' }, chapters.map((chapter) =>
      h('article', { className: 'chapter-card', key: chapter.id },
        h('div', { className: 'chapter-number' }, chapter.id),
        h('h3', null, chapter.name),
        h('p', null, chapter.persian),
        h('div', { className: 'chapter-meta' }, h('span', null, `${chapter.verses} آیه`), h('span', null, chapter.place)),
        h('small', null, chapter.tone),
      ),
    )),
  );
}

function FeatureBand() {
  return h('section', { id: 'features', className: 'feature-band' }, features.map((feature, index) =>
    h('article', { key: feature.title },
      h('span', null, `0${index + 1}`),
      h('h3', null, feature.title),
      h('p', null, feature.text),
    ),
  ));
}

function AudioSection() {
  return h('section', { id: 'audio', className: 'section-grid audio-section' },
    h('div', null,
      h('span', { className: 'section-kicker' }, 'استودیو صوتی'),
      h('h2', null, 'قاریان مشهور در یک رابط مینیمال'),
      h('p', null, 'ساختار بخش صوتی برای لیست پخش، دانلود آفلاین، تکرار آیه و نمایش موج صدا آماده شده است.'),
    ),
    h('div', { className: 'reciter-list' }, reciters.map((reciter) =>
      h('div', { className: 'reciter-row', key: reciter },
        h('span', { className: 'avatar' }, '♪'),
        h('strong', null, reciter),
        h('button', null, 'انتخاب'),
      ),
    )),
  );
}

function Plans() {
  return h('section', { id: 'plans', className: 'plans-section' },
    h('div', { className: 'section-heading' },
      h('span', { className: 'section-kicker' }, 'برنامه شخصی'),
      h('h2', null, 'حفظ، ختم و تدبر روزانه'),
    ),
    h('div', { className: 'plan-cards' },
      h('article', null, h('strong', null, 'ختم ۳۰ روزه'), h('p', null, 'تقسیم روزانه جزءها با نشانگر پیشرفت.')),
      h('article', null, h('strong', null, 'حفظ نوجوانان'), h('p', null, 'جلسات کوتاه، مرور هوشمند و هدف هفتگی.')),
      h('article', null, h('strong', null, 'تدبر موضوعی'), h('p', null, 'مسیر مطالعه بر اساس موضوعات اخلاقی و اجتماعی.')),
    ),
  );
}

function GlobalSection() {
  return h('section', { id: 'global', className: 'global-section' },
    h('div', null,
      h('span', { className: 'section-kicker' }, 'سیستم جهانی'),
      h('h2', null, 'آماده برای کاربران سراسر دنیا'),
      h('p', null, 'انتخاب زبان، واحد زمان، نمایش راست‌به‌چپ/چپ‌به‌راست و محتوای چندفرهنگی در مرکز طراحی قرار گرفته است.'),
    ),
    h('div', { className: 'language-cloud' }, languages.map((language) => h('span', { key: language }, language))),
  );
}

function App() {
  return h('div', { className: 'site-shell' },
    h(Header),
    h('main', { id: 'home' }, h(Hero), h(SearchPanel), h(Reader), h(FeatureBand), h(AudioSection), h(Plans), h(GlobalSection)),
    h('footer', { className: 'footer' },
      h('p', null, 'Quran Global — نمونه React Static برای تجربه آنلاین قرآن کریم'),
      h('a', { href: '#home' }, 'بازگشت به بالا ↑'),
    ),
  );
}

createRoot(document.getElementById('root')).render(h(App));
