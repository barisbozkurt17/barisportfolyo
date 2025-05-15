import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import ContactForm from './components/ContactForm';
import SocialLinks from './components/SocialLinks';
import './App.css';

function App() {
  const [text, setText] = useState('');
  const fullText = "Web Developer & Software Engineer";
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(150);
  const [repos, setRepos] = useState([]);

  useEffect(() => {
    const handleTyping = () => {
      const current = loopNum % 2;
      const currentText = fullText;

      setText(
        isDeleting
          ? currentText.substring(0, text.length - 1)
          : currentText.substring(0, text.length + 1)
      );

      setTypingSpeed(isDeleting ? 30 : 150);

      if (!isDeleting && text === currentText) {
        setTimeout(() => setIsDeleting(true), 500);
      } else if (isDeleting && text === '') {
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
      }
    };

    const timer = setTimeout(handleTyping, typingSpeed);
    return () => clearTimeout(timer);
  }, [text, isDeleting, loopNum, typingSpeed]);

  useEffect(() => {
    fetch('https://api.github.com/users/barisbozkurt17/repos')
      .then((res) => res.json())
      .then((data) => {
        const filtered = data
          .filter(repo => !repo.fork && !repo.private)
          .sort((a, b) => new Date(b.updated_at) - new Date(a.updated_at));
        setRepos(filtered);
      });
  }, []);

  return (
    <div className="min-h-screen bg-gray-900">
      <Navbar />
      
      {/* Hero Section */}
      <section id="home" className="pt-20 min-h-screen flex items-center justify-center bg-gradient-to-r from-gray-800 to-gray-900">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between">
            {/* Sol taraf - Animasyonlu yazı */}
            <div className="md:w-1/2 text-center md:text-left mb-8 md:mb-0">
              <h1 className="text-4xl md:text-6xl font-bold mb-4 text-white">
                Merhaba, Ben Barış
              </h1>
              <div className="h-12">
                <span className="text-2xl md:text-3xl text-blue-400 font-mono">
                  {text}
                  <span className="animate-blink">|</span>
                </span>
              </div>
              <p className="text-xl md:text-2xl text-gray-300 mt-4">
                Yazılım geliştirme tutkusuyla yeni projeler üretiyorum
              </p>
              <div className="mt-8">
                <a
                  href="#contact"
                  className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition duration-300 inline-block"
                >
                  İletişime Geç
                </a>
              </div>
            </div>

            {/* Sağ taraf - Resim */}
            <div className="md:w-1/2 flex justify-center">
              <img
                src="https://cdn.pixabay.com/photo/2018/09/27/09/22/artificial-intelligence-3706562_1280.png"
                alt="Developer"
                className="w-full max-w-lg animate-float"
              />
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-gray-800">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8 text-white">Ben Kimim?</h2>
          <div className="text-lg text-gray-300 space-y-4">
            <p>
              Merhaba! Ben Balıkesir Üniversitesi'nde Bilgisayar Mühendisliği öğrencisiyim. Eğitim hayatım boyunca farklı disiplinlerde kendimi geliştirdim. Balıkesir Üniversitesi'nden Matematik Öğretmenliği ve İstanbul Üniversitesi'nden Bilgisayar Programcılığı mezuniyetlerime sahibim.
            </p>
            <p>
              Teknoloji ve programlama tutkum, sürekli yeni şeyler öğrenmemi ve üretmemi sağlıyor. Yazılım geliştirme sürecinde yeni teknolojileri keşfetmek ve bunları kullanarak yaratıcı çözümler üretmek benim için bir tutku haline geldi.
            </p>
            <p>
              Matematik altyapım ve programlama becerilerimi birleştirerek, karmaşık problemlere yaratıcı çözümler üretmeyi hedefliyorum. Sürekli kendimi geliştirmeye ve yeni teknolojileri öğrenmeye odaklanıyorum.
            </p>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 bg-gray-900">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8 text-white">Neler Yapabilirim</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* C# */}
            <div className="bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="flex items-center justify-center mb-4">
                <img 
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg" 
                  alt="C#" 
                  className="w-16 h-16"
                />
              </div>
              <h3 className="text-xl font-semibold text-white text-center mb-2">C#</h3>
              <p className="text-gray-300 text-center">
                .NET Framework ile masaüstü ve web uygulamaları geliştirme
              </p>
            </div>

            {/* Python */}
            <div className="bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="flex items-center justify-center mb-4">
                <img 
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" 
                  alt="Python" 
                  className="w-16 h-16"
                />
              </div>
              <h3 className="text-xl font-semibold text-white text-center mb-2">Python</h3>
              <p className="text-gray-300 text-center">
                Veri analizi, makine öğrenmesi ve otomasyon projeleri
              </p>
            </div>

            {/* JavaScript */}
            <div className="bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="flex items-center justify-center mb-4">
                <img 
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" 
                  alt="JavaScript" 
                  className="w-16 h-16"
                />
              </div>
              <h3 className="text-xl font-semibold text-white text-center mb-2">JavaScript</h3>
              <p className="text-gray-300 text-center">
                Web geliştirme ve interaktif uygulamalar
              </p>
            </div>

            {/* AppScript */}
            <div className="bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="flex items-center justify-center mb-4">
                <img 
                  src="https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_Apps_Script.svg" 
                  alt="Google Apps Script" 
                  className="w-16 h-16"
                />
              </div>
              <h3 className="text-xl font-semibold text-white text-center mb-2">Google Apps Script</h3>
              <p className="text-gray-300 text-center">
                Google Workspace otomasyonu ve özelleştirme
              </p>
            </div>

            {/* React */}
            <div className="bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="flex items-center justify-center mb-4">
                <img 
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" 
                  alt="React" 
                  className="w-16 h-16"
                />
              </div>
              <h3 className="text-xl font-semibold text-white text-center mb-2">React</h3>
              <p className="text-gray-300 text-center">
                Modern web uygulamaları ve kullanıcı arayüzleri
              </p>
            </div>

            {/* HTML/CSS */}
            <div className="bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="flex items-center justify-center mb-4 space-x-2">
                <img 
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" 
                  alt="HTML5" 
                  className="w-12 h-12"
                />
                <img 
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" 
                  alt="CSS3" 
                  className="w-12 h-12"
                />
              </div>
              <h3 className="text-xl font-semibold text-white text-center mb-2">HTML/CSS</h3>
              <p className="text-gray-300 text-center">
                Responsive web tasarımı ve modern CSS özellikleri
              </p>
            </div>

            {/* Visual Basic */}
            <div className="bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="flex items-center justify-center mb-4 space-x-2">
                <img 
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/visualstudio/visualstudio-plain.svg" 
                  alt="VBA" 
                  className="w-12 h-12"
                />
                <img 
                  src="https://upload.wikimedia.org/wikipedia/commons/3/34/Microsoft_Office_Excel_%282019%E2%80%93present%29.svg" 
                  alt="Excel" 
                  className="w-12 h-12"
                />
              </div>
              <h3 className="text-xl font-semibold text-white text-center mb-2">Excel VBA</h3>
              <p className="text-gray-300 text-center">
                Excel otomasyonu, makro geliştirme ve veri işleme
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="py-20 bg-gray-800">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8 text-white">Portfolyo</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {repos.length === 0 && (
              <div className="col-span-full text-center text-gray-400">GitHub projeleri yükleniyor...</div>
            )}
            {repos.map((repo) => {
              let customDesc = repo.description;
              if (!customDesc) {
                if (repo.name === 'google_appscript_kitap_girisi') customDesc = 'Google Apps Script ile kitap giriş otomasyonu.';
                else if (repo.name === 'internet_programlama') customDesc = 'İnternet Programlama dersi örnekleri.';
                else if (repo.name === 'Visual-Programming-PyQT-Lecture-Notes') customDesc = 'PyQT ile görsel programlama ders notları.';
                else if (repo.name === 'Object-Oriented-Programming-CENG-Lecture-Notes') customDesc = 'Nesne yönelimli programlama ders notları.';
                else if (repo.name === 'barisportfolyo') customDesc = 'Kişisel portfolyo sitesi.';
                else if (repo.name === 'kutuphane_python') customDesc = 'Python ile kütüphane otomasyonu.';
                else customDesc = 'Açıklama yok.';
              }
              return (
                <a
                  key={repo.id}
                  href={repo.html_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gray-900 rounded-lg shadow-lg p-6 flex flex-col hover:shadow-2xl transition-shadow duration-300 border border-gray-700 hover:border-blue-500"
                >
                  <h3 className="text-xl font-semibold text-white mb-2">{repo.name}</h3>
                  <p className="text-gray-300 flex-1 mb-4 text-sm">{customDesc}</p>
                  <div className="flex flex-wrap gap-2 mt-auto">
                    {repo.language && (
                      <span className="bg-blue-700 text-white text-xs px-2 py-1 rounded-full">{repo.language}</span>
                    )}
                    <span className="text-xs text-gray-400">⭐ {repo.stargazers_count}</span>
                    <span className="text-xs text-gray-400">Güncellendi: {new Date(repo.updated_at).toLocaleDateString('tr-TR')}</span>
                  </div>
                </a>
              );
            })}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gray-900">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8 text-white">İletişim</h2>
          <ContactForm />
          <div className="mt-12 text-center">
            <h3 className="text-xl font-semibold mb-4 text-white">Sosyal Medya</h3>
            <div className="flex justify-center">
              <SocialLinks />
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-950 text-gray-300 py-8">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <p>&copy; {new Date().getFullYear()} Tüm hakları saklıdır.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
