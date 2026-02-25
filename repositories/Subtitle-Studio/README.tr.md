# 🎬 Subtitle Studio

**Subtitle Studio**, canlı kamera, yerel video dosyaları veya YouTube üzerinden oynattığınız videolara anlık notlar ekleyip, bu notları zaman damgalı altyazı dosyasına (.vtt) dönüştüren ve video ile birlikte ZIP olarak indirmenizi sağlayan bir web uygulamasıdır. Arayüz **Türkçe, İngilizce, Rusça, Arapça ve Fransızca** dillerini destekler, sesli yazma ile not girişi yapabilirsiniz.

---

## ✨ Özellikler

- 📹 **Üç video kaynağı**:
  - **Canlı Yayın**: Web kamerasından kayıt yapın, kaydı durdurun ve kaydedilen videoyu izleyin.
  - **Dosya Yükle**: Bilgisayarınızdan bir video dosyası seçin ve oynatın.
  - **YouTube**: Video ID'si veya linki girerek YouTube videolarını oynatın.
- 🎥 **Kamera Seçici**: Canlı yayın sekmesinde, kayıt başlamadan önce kullanmak istediğiniz kamerayı seçebilirsiniz. Kayıt sırasında kamera değiştirilemez.
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
- MediaDevices API – Kamera listesini almak ve seçmek için
- Flexbox ve CSS Grid – Responsive arayüz

---

## 🚀 Kurulum ve Çalıştırma

Proje tamamen istemci taraflıdır, herhangi bir sunucu kurulumu gerektirmez.

1. **Depoyu klonlayın**:
   ```bash
   git clone https://github.com/aliyilmaz/subtitle-studio.git
   ```
2. **Dosyaları bir web sunucusunda çalıştırın (opsiyonel):**

Basit bir HTTP sunucusu kullanabilirsiniz (örn. Python ile ``http.server``).

Doğrudan ``index.html`` dosyasını tarayıcıda açarak da çalıştırabilirsiniz (ancak bazı tarayıcılarda kamera ve mikrofon izinleri için HTTPS veya localhost gerekebilir).

## 🎯 Kullanım Kılavuzu
### Canlı Yayın Sekmesi
1. Kamera seçici butonuna (📷) tıklayarak kullanmak istediğiniz kamerayı seçin.
2. "Kaydet" butonuna basarak kaydı başlatın.
3. Kayıt sırasında "Not Ekle" butonu ile anlık notlar ekleyin.
4. Kaydı durdurun, kaydedilen videoyu izleyin.
5. "Bitir & ZIP indir" ile video ve altyazıyı arşivleyin.

### Dosya Yükle Sekmesi
1. Bilgisayarınızdan bir video dosyası seçin.
2. Videoyu oynatırken notlar ekleyin.
3. İşlemi tamamlayıp ZIP indirin.

### YouTube Sekmesi
1. Video linki veya ID'sini girin.
2. Videoyu oynatırken notlar ekleyin.
3. Sadece altyazı dosyasını indirin.

### 📝 Notlar
+ Sesli yazma özelliği yalnızca **Google Chrome, Microsoft Edge ve Safari** gibi Web Speech API'yi destekleyen tarayıcılarda çalışır.
+ Kamera seçimi için tarayıcı izni gereklidir.
+ Kaydedilen videolar .webm formatında, altyazılar **.vtt** formatında kaydedilir.