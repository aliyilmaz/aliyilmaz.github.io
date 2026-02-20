# 🎬 Subtitle Studio

**Subtitle Studio**, canlı kamera, yerel video dosyaları veya YouTube üzerinden oynattığınız videolara anlık notlar ekleyip, bu notları zaman damgalı altyazı dosyasına (.vtt) dönüştüren ve video ile birlikte ZIP olarak indirmenizi sağlayan bir web uygulamasıdır. Arayüz **Türkçe, İngilizce, Rusça, Arapça ve Fransızca** dillerini destekler, sesli yazma ile not girişi yapabilirsiniz.

---

## ✨ Özellikler

- 📹 **Üç video kaynağı**:
  - **Canlı Yayın**: Web kamerasından kayıt yapın, kaydı durdurun ve kaydedilen videoyu izleyin.
  - **Dosya Yükle**: Bilgisayarınızdan bir video dosyası seçin ve oynatın.
  - **YouTube**: Video ID’si veya linki girerek YouTube videolarını oynatın.
- 📝 **Not ekleme**:
  - Oynatma sırasında herhangi bir kareye not ekleyin.
  - Notlar otomatik olarak zaman damgasıyla kaydedilir.
  - **Sesli yazma** desteği (mikrofon butonu ile konuşarak not girin).
- 🗂️ **Altyazı oluşturma**:
  - Eklenen notlar `.vtt` (WebVTT) formatında altyazı dosyasına dönüştürülür.
  - Her notun görünme süresini ayarlayabilirsiniz (0.5 – 10 saniye).
- 🎁 **ZIP indirme**:
  - Video (canlı kayıt veya yüklenen dosya) + altyazı dosyası tek bir ZIP arşivi olarak indirilir.
  - YouTube videolarında sadece altyazı indirilir (video dosyası eklenmez).
- 🌐 **Çoklu dil desteği**:
  - Türkçe, İngilizce, Rusça, Arapça, Fransızca.
  - Sayfa açıldığında tarayıcı diliniz otomatik algılanır ve uygun dil seçilir (desteklenmiyorsa İngilizce).
  - Dil değiştiğinde tüm arayüz metinleri ve sesli tanıma dili de güncellenir.
- 📱 **Responsive tasarım**:
  - Masaüstü, tablet ve mobil cihazlarda rahat kullanım.
  - Video alanı sabit genişlikte, notlar alanı esnek.

---

## 🛠️ Kullanılan Teknolojiler

- HTML5, CSS3, JavaScript (ES6)
- [JSZip](https://stuk.github.io/jszip/) – ZIP arşivi oluşturmak için
- YouTube IFrame API – YouTube videolarını oynatmak için
- Web Speech API – Sesli yazma (tarayıcı desteği gerektirir)
- Flexbox ve CSS Grid – Responsive arayüz

---

## 🚀 Kurulum ve Çalıştırma

Proje tamamen istemci taraflıdır, herhangi bir sunucu kurulumu gerektirmez.

1. **Depoyu klonlayın**:
   ```bash
   git clone https://github.com/kullaniciadi/subtitle-studio.git
   ```