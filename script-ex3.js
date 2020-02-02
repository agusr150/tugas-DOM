function myShio(myDate){
    d1 = new Date("1924-02-05")
    d2 = new Date("1925-01-24")
    d3 = new Date("1926-02-13")
    d4 = new Date("1927-02-02")
    d5 = new Date("1928-01-23")
    d6 = new Date("1929-02-10")
    d7 = new Date("1930-01-30")
    d8 = new Date("1931-02-17")
    d9 = new Date("1932-02-06")
    d10 = new Date ("1933-01-26")
    d11 = new Date ("1934-02-14")
    d12 = new Date ("1935-02-04")
    d13 = new Date ("1936-01-24")
    d14 = new Date ("1937-02-11")
    d15 = new Date ("1938-01-31")
    d16 = new Date ("1939-02-19")
    d17 = new Date ("1940-02-08")
    d18 = new Date ("1941-01-27")
    d19 = new Date ("1942-02-15")
    d20 = new Date ("1943-02-05")
    d21 = new Date ("1944-01-25")
    d22 = new Date ("1945-02-13")
    d23 = new Date ("1946-02-02")
    d24 = new Date ("1947-01-22")
    d25 = new Date ("1948-02-10")
    d26 = new Date ("1949-01-29")
    d27 = new Date ("1950-02-17")
    d28 = new Date ("1951-02-06")
    d29 = new Date ("1952-01-27")
    d30 = new Date ("1953-02-14")
    d31 = new Date ("Feb 03 1954")
    d32 = new Date ("Jan 24 1955")
    d33 = new Date ("Feb 12 1956")
    d34 = new Date ("Jan 31 1957")
    d35 = new Date ("Feb 18 1958")
    d36 = new Date ("Feb 08 1959")
    d37 = new Date ("Jan 28 1960")
    d38 = new Date ("Feb 15 1961")
    d39 = new Date ("Feb 05 1962")
    d40 = new Date ("Jan 25 1963")
    d41 = new Date ("Feb 13 1964")
    d42 = new Date ("Feb 02 1965")
    d43 = new Date ("Jan 21 1966")
    d44 = new Date ("Feb 09 1967")
    d45 = new Date ("Jan 30 1968")
    d46 = new Date ("Feb 17 1969")
    d47 = new Date ("Feb 06 1970")
    d48 = new Date ("Jan 27 1971")
    d49 = new Date ("Feb 15 1972")
    d50 = new Date ("Feb 03 1973")
    d51 = new Date ("Jan 23 1974")
    d52 = new Date ("Feb 11 1975")
    d53 = new Date ("Jan 31 1976")
    d54 = new Date ("Feb 18 1977")
    d55 = new Date ("Feb 07 1978")
    d56 = new Date ("Jan 28 1979")
    d57 = new Date ("Feb 16 1980")
    d58 = new Date ("Feb 05 1981")
    d59 = new Date ("Jan 25 1982")
    d60 = new Date ("Feb 13 1983")
    d61 = new Date ("Feb 02 1984")
    d62 = new Date ("Feb 20 1985")
    d63 = new Date ("Feb 09 1986")
    d64 = new Date ("Jan 29 1987")
    d65 = new Date ("Feb 17 1988")
    d66 = new Date ("Feb 06 1989")
    d67 = new Date ("Jan 27 1990")
    d68 = new Date ("Feb 15 1991")
    d69 = new Date ("Feb 04 1992")
    d70 = new Date ("Jan 23 1993")
    d71 = new Date ("Feb 10 1994")
    d72 = new Date ("Jan 31 1995")
    d73 = new Date ("Feb 19 1996") 
    d74 = new Date ("Feb 07 1997")
    d75 = new Date ("Jan 28 1998")
    d76 = new Date ("Feb 16 1999")
    d77 = new Date ("Feb 05 2000")
    d78 = new Date ("Jan 24 2001")
    d79 = new Date ("Feb 12 2002")
    d80 = new Date ("Feb 01 2003")
    d81 = new Date ("Jan 22 2004")
    d82 = new Date ("Feb 09 2005")
    d83 = new Date ("Jan 29 2006")
    d84 = new Date ("Feb 18 2007")
    d85 = new Date ("Feb 07 2008")
    d86 = new Date ("Jan 26 2009")
    d87 = new Date ("Feb 14 2010")
    d88 = new Date ("Feb 03 2011")
    d89 = new Date ("Jan 23 2012")
    d90 = new Date ("Feb 10 2013")
    d91 = new Date ("Jan 31 2014")
    d92 = new Date ("Feb 19 2015")
    d93 = new Date ("Feb 08 2016")
    d94 = new Date ("Jan 28 2017")
    d95 = new Date ("Feb 16 2018")
    d96 = new Date ("Feb 05 2019")
    d97 = new Date ("Jan 25 2020")
    
    d = [d1, d2, d3, d4, d5, d6, d7, d8, d9, d10, d11, d12, d13, d14, d15,
        d16, d17, d18, d19, d20, d21, d22, d23, d24, d25, d26, d27, d28, d29,
        d30, d31, d32, d33, d34, d35, d36, d37, d38, d39, d40, d41, d42, d43,
        d44, d45, d46, d47, d48, d49, d50, d51, d52, d53, d54, d55, d56, d57,
        d58, d59, d60, d61, d62, d63, d64, d65, d66, d67, d68, d69, d70, d71,
        d72, d73, d74, d75, d76, d77, d78, d79, d80, d81, d82, d83, d84, d85,
        d86, d87, d88, d89, d90, d91, d92, d93, d94, d95, d96, d97]

    shio = ["Tikus", "Kerbau", "Macan", "Kelinci","Naga", "Ular",
            "Kuda", "Kambing", "Monyet", "Ayam", "Anjing", "Babi"]
    elemen = ["Yang Kayu", "Yin Kayu", "Yang Api", "Yin Api", "Yang Bumi",
                "Yin Bumi", "Yang Logam", "Yin Logam", "Yang Air", "Yin Air"]  

    tanggal = new Date(myDate)

    for (var i=1; i<d.length; i++){
        if(tanggal.getTime() < d[i].getTime()){
            console.log(i)
            nShio = i-shio.length*(Math.floor(i/shio.length))
            nElemen = i-elemen.length*(Math.floor(i/elemen.length))
            if(nShio===0){
                nShio = shio.length
            }
             gShio = shio[nShio-1]
            
            if(nElemen ===0){
                nElemen = elemen.length
            }
            gElemen = elemen[nElemen-1]
            

           console.log('nShio anda: '+nShio +' dan nelemen anda: '+nElemen)
            console.log('Shio anda: '+gShio +' dan elemen anda: '+gElemen)
            break
        }
    }

    return [gShio, gElemen]
}

function tionghoa(shio){
    switch(shio) {
        case "Tikus":
          result = {
                Cinta: "Jika Anda lajang dan ingin menjalin hubungan, mungkin ini bukan tahun keberuntungan Anda! Tidak banyak peluang untuk menjalin hubungan baru akan menghampiri Anda tahun ini. Ketika Anda mencoba untuk mendapatkan pasangan, pastikan Anda menunjukkan diri yang sebenarnya sejak awal. Hal ini dapat membantu mencegah terjadinya banyak masalah disaat hubungan Anda tengah berjalan. Bagi yang sudah berkeluarga, pastikan untuk bersikap tegas dengan apa yang Anda inginkan dalam hubungan, dan dengarkan apa yang diinginkan pasangan Anda juga. Ini akan membantu mencegah timbulnya adu argumen (percekcokan) yang bisa terjadi, jika Anda tidak melakukannya. Kalau tidak bisa menahan diri, hubungan Anda terancam bubar di tahun ini. Bagikan pengalaman positif dengan keluarga besar dan sahabat dekat di sepanjang tahun ini. Selama Anda tetap percaya diri dan tenang, pasti memiliki hubungan yang sukses.",
                Usaha: "Di tahun tikus logam ini akan membuat usaha maupun bisnis lebih sulit terselesaikan dibanding tahun lalu. Pemilik shio tikus juga diprediksi akan memiliki beban kerja yang lebih berat di tahun ini. Apabila ada proyek penting, sebaiknya fokus dulu pada hal tersebut.Apakah pekerjaan Anda saat ini membuat bahagia? Apakah itu memberi Anda cukup uang untuk hidup nyaman? Jika Anda menjawab “tidak” untuk salah satu dari 2 pertanyaan ini, maka mungkin ini saatnya untuk mencari pekerjaan baru. Apapun pekerjaan yang Anda miliki, tetap perkuat keterampilan keahlian, komunikasi dan pengetahuan, agar mengurangi ketergantungan Anda pada orang lain.",
                Keuangan: "Ramalan keuangan shio tikus di tahun 2020 memprediksi bahwa akan ada pengeluaran yang tidak terduga di tahun ini (ada pengeluaran/modal). Pastikan Anda memiliki dana simpanan yang cukup untuk membiayainya. Gunakan uang Anda dengan bijak untuk membayar lunas semua hutang, karena itu akan menimbulkan rasa tidak nyaman. Simpan sisanya dalam bentuk tabungan/investasi. Alih-alih berfokus pada keinginan saat ini, akan lebih bijak jika Anda berfokus pada kebutuhan di masa depan, dimana tahun ini merupakan waktunya siklus 12 tahunan Anda, yakni tahun tahun zodiak lahir Anda (hanzi : 本命年; pinyin : běnmìngnián); atau yang secara harafiah berarti asal tahun kehidupan.  Mereka diyakini akan memiliki nasib yang kurang baik di sepanjang tahun yang berjalan ini.",   
                Kesehatan: "Untuk kesehatan, mereka yang bershio tahun tikus diprediksi kurang lebih akan sama seperti tahun lalu. Namun ini bukan berarti bahwa Anda menjadi malas untuk datang mengontrol kesehatan Anda secara rutin, terutama jika saat ini Anda sudah mengidap penyakit berat, seperti diabetes, stroke, dan sebagainya. Mengabaikan hal ini hanya akan membuat penyakit Anda memburuk. Berolahraga dan jaga pola makan dengan benar. Pastikan untuk cukup istirahat di tahun 2020, agar stres dan sakit kepala tidak datang menghampiri.",        
                Link: "https://www.tionghoa.info/ramalan-shio-tikus-2020-cinta-usaha-keuangan-kesehatan-dan-fengshui/"
                }
            break;
        case "Kerbau":
            result = {
                Cinta: "Ramalan cinta shio Kerbau di tahun 2020 memprediksi bahwa ini adalah tahun fluktuasi (naik-turun), membuat hubungan baru, atau justru berakhirnya sebuah hubungan. Jika dipetakan dalam garis, kehidupan sosial Anda akan terlihat seperti deretan bukit tahun ini.",
                Usaha: "Ramalan karir shio Kerbau 2020 memprediksi bahwa kehidupan dunia kerja Anda akan relatif tenang tahun ini. Proyek-proyek akan datang dan pergi, tetapi Anda harus harus cukup stabil untuk menanganinya. Akan ada perasaan bahwa perubahan sudah dekat, yang bisa jadi benar. Cobalah untuk mencari tahu apa pun tentang masa depan karier Anda. Berbicara dengan rekan kerja dan atasan adalah cara yang bagus untuk mencari tahu apa yang sedang terjadi di tempat kerja Anda. Beberapa tantangan akan menghampiri Anda, tetapi tidak ada yang tidak dapat Anda tangani.",
                Keuangan: "Anda harus mengatur keadaan finansial Anda dalam 4 bulan pertama di tahun ini. Dengan melakukan ini, Anda akan membuat sisa tahun menjadi jauh lebih mudah untuk dilewati. Investasikan sisanya pada saham, emas, atau pada valas. Bersikap logislah dengan barang-barang yang Anda beli. Jangan menghabiskan uang untuk hal yang sia-sia. Jangan tergoda oleh flash sale, utamakan kebutuhan dan simpan sisanya di tahun 2020 ini, karena Anda akan memerlukannya di tahun depan.",
                Kesehatan: "Disisi kesehatan, ramalan shio kerbau di tahun 2020 memprediksi bahwa Anda akan merasa memiliki lebih banyak energi di tahun ini. Anda tidak perlu terlalu mengkhawatirkan kesehatan Anda tahun ini, tidak akan ada masalah yang serius. Sebaliknya, Anda harus fokus pada kesehatan mental Anda (stres). Cobalah untuk mulai berolahraga secara rutin untuk menyalurkan sisa tenaga yang berlebih itu, namun jangan memaksakan diri. Atur pola makan rendah kalori, batasi makanan yang bisa memicu darah tinggi, dan hindari minum2 dan merokok.",
                Link: "https://www.tionghoa.info/ramalan-shio-kerbau-2020-cinta-usaha-keuangan-kesehatan-dan-fengshui/?utm_source=dable"
            }
            break;
        case "Macan":
            result = {
                Cinta: " Selama dihati serta pikiranmu masih ada gairah 🙂 Akan ada hal2 baru yang menarik bagi Anda dan pasangan. Jika Anda masih lajang, maka jadilah diri Anda sendiri, dan cari seseorang yang memiliki banyak sifat2 kesamaan dengan kepribadian Anda. Carilah pasangan yang bisa menutupi kekurangan Anda. Tahun 2020 adalah tahun kesuksesan dalam hidup dan hubungan. Jangan bergaul dengan orang yang membuat Anda mudah marah. Pertahankan teman yang menginspirasi Anda, sebaliknya, BUANG mereka yang melakukan hal sebaliknya. Anda harus tetap tenang dan tidak terlalu cemas ketika berbicara dengan pasangan. Bagi wanita bershio macan yang sudah menikah, ini merupakan tahun yang tepat untuk merencanakan kehamilan.",
                Usaha: "Setiap upaya Anda di masa lalu pasti akan berhasil tahun ini! Percayalah, ini adalah tahunnya Anda! Bintang Anda akan bersinar di sepanjang tahun ini. Ini adalah salah satu bidang dalam hidup Anda, yang tidak perlu Anda ubah untuk unggul. Peluang untuk promosi atau mendapatkan bonus cukup tinggi di tahun ini.",
                Keuangan: "Di tahun tikus ini, akan ada perubahan dalam isi dompet keuangan Anda. Meski nantinya Anda akan memiliki pengeluaran yang sama besarnya dengan tahun lalu, namun Anda cenderung lebih bahagia saat membelanjakan uang. Setiap masalah keuangan yang Anda temui akan diselesaikan dengan mudah. Pemasukan Anda akan sangat stabil di tahun ini, jadi jangan terlalu khawatir.",
                Kesehatan: "Disisi kesehatan, ramalan shio macan di tahun 2020 memprediksi bahwa Anda akan memiliki banyak energi tahun ini. Anda juga akan sedikit lebih impulsif dari sebelumnya. Inilah yang Anda butuhkan untuk mendorong diri sendiri, dalam membuat perubahan dalam hidup! Pertahankan diet & olahraga rutin yang telah Anda jalani tahun lalu. Namun, pastikan Anda tidak terlalu memaksakan diri secara fisik, atau itu bisa berakhir dengan cedera! Selain itu, perhatikan pola makan. Shio macan akan sangat rentan terhadap masalah pencernaan dan kesehatan lambung tahun ini. Rutinlah memeriksakan diri ke dokter, jika Anda telah mengidap penyakit dalam tertentu. Itu bisa memburuk jika tidak di kontrol.",
                Link: "https://www.tionghoa.info/ramalan-shio-macan-2020-cinta-usaha-keuangan-kesehatan-dan-fengshui/"
            }
            break;
        case "Kelinci":
            result = {
                Cinta: "Ramalan cinta shio kelinci 2020 memprediksi bahwa kelinci jantan maupun betina tidak akan melihat banyak peningkatan tahun ini. Peluang bertemu pasangan yang tepat pun akan jarang terjadi bagi mereka. Anda mungkin memiliki citra pasangan yang sempurna dalam pikiran, namun jangan buang waktu Anda untuk mencari orang ini tahun ini, hanya karena mereka tidak memenuhi semua kriteria Anda (shio ini terkenal paling pemilih, diantara shio2 yang lain).",
                Usaha: "Anda yang bershio kelinci harus belajar lebih banyak pengetahuan yang berhubungan dengan pekerjaan/usaha tahun ini. Atau, pelajari keterampilan baru yang berhubungan / mendukung dengan pekerjaan. Rekan kerja Anda bisa menjadi aset terbesar di tempat kerja, di tahun ini.",
                Keuangan: "Ramalan keuangan shio kelinci 2020 meminta Anda untuk melunasi hutang lama (termasuk utang budi juga), yang mungkin Anda miliki. Utang ini cenderung membuat Anda stres dan membebani Anda, jika tidak segera melunasinya. Atur anggaran Anda, dan coba untuk menyeimbangkannya di tahun ini. Hati-hati, banyak pengeluaran siap menanti di pertengahan tahun!",
                Kesehatan: "Wahai kelinci, semua pekerjaan yang Anda lakukan pasti membuat stres. Cobalah untuk menghabiskan lebih banyak waktu di luar ruangan, dan kurangi waktu di depan layar monitor tahun ini. Ini bisa mendorong Anda untuk beraktivitas outdoor lebih banyak. Hal ini akan membuat mata Anda lebih sehat, dan juga menghindarkan Anda dari sakit kepala.",
                Link: "https://www.tionghoa.info/ramalan-shio-kelinci-2020-cinta-usaha-keuangan-kesehatan-dan-fengshui/"
            }
            break
        case "Naga":
            result = {
                Cinta: "Ramalan cinta shio naga 2020 memprediksi bahwa Anda akan memiliki hubungan yang santai. Tetapi itu tidak berarti bahwa itu akan membosankan. Menjaga hal-hal menarik dan baru, adalah cara yang bagus untuk membuat hubungan Anda lebih baik. Jika Anda lajang, maka spontanitas adalah cara yang bagus untuk menemukan pasangan baru. Cobalah hal-hal baru, pergi ke tempat-tempat baru, Anda pasti akan bertemu dengan beberapa orang yang menarik. Jangan malas dalam membangun hubungan. Bicarakan hal-hal yang Anda rasa perlu. Cobalah untuk mempercayai pasangan Anda. Perkuat ikatan yang sudah Anda miliki dengan teman dan keluarga tahun ini. Jangan mengisolasi diri Anda di tahun ini; biarkan kehidupan sosial Anda berkembang di tahun 2020!",
                Usaha: "Prediksi karir shio naga 2020 meramalkan bahwa akan banyak peluang baru akan muncul di tempat kerja Anda di tahun 2020. Ini adalah waktu yang tepat untuk bergaul dengan atasan Anda jika Anda mencari promosi",
                Keuangan: "Akan ada beberapa pengeluaran tidak terduga yang harus dihadapi para naga di pertengahan tahun ini, yang berhubungan dengan utang masa lalu, atau pengeluaran kesehatan. Buatlah persiapan diawal tahun, atau itu akan mengacaukan rencana Anda.",
                Kesehatan: "Ramalan shio naga tahun 2020 memprediksi bahwa Anda perlu berolahraga, untuk mencegah penyakit yang berhubungan dengan tulang/sendi. Buatlah jadwal untuk diri sendiri agar menjaga rutinitas. Jaga pola makan diet seimbang. Cobalah untuk mengurangi tingkat stres Anda di pertengahan tahun, atau Anda akan beresiko tinggi terkena penyakit.",
                Link: "https://www.tionghoa.info/ramalan-shio-naga-2020-cinta-usaha-keuangan-kesehatan-dan-fengshui/?utm_source=dable"
            }
            break
        case "Ular":
            result = {
                Cinta: "Akan ada banyak perubahan dalam kehidupan cinta Anda tahun ini, tetapi sebagian besar perubahan justru berasal dari dalam diri Anda. Entah dipicu oleh apa, Anda akan merasa lebih emosi tahun ini. Ini akan sangat beresiko, jika pasangan Anda juga mudah terpicu, dan meledak bersama. Sepertinya, ini adalah tahun yang baik bagi para lajang untuk segera mencari dan menemukan pasangan yang cocok, yang mengerti diri Anda.",
                Usaha: "Ramalan karir shio ular tahun 2020 memprediksikan bahwa akan ada lebih banyak peluang untuk kemajuan di tempat kerja, ataupun pada usaha yang Anda geluti pada tahun 2020. Buktikan diri Anda hebat dalam banyak hal. Anda hampir pasti akan mendapatkan promosi atau kenaikan gaji di tahun ini . Bekerja keras tahun ini akan meningkatkan level kehidupan Anda.",
                Keuangan: "Hindari pembelian dan pembelanjaan secara impulsif (berlebihan), jika masih ingin menjaga keseimbangan anggaran Anda. Melakukan pembelian kecil untuk diri sendiri seharusnya tidak menimbulkan masalah. Keuangan Anda akan cukup stabil di tahun ini, setidaknya untuk melakukan sekali – dua kali trip perjalanan liburan bersama keluarga. Investasikan uang Anda pada saham, emas, valas, atau properti. Tahun 2020 akan menjadi tahun yang stabil untuk itu.",
                Kesehatan: "Ramalan kesehatan shio ular tahun 2020 memprediksi bahwa Anda akan merasa sedikit lebih lelah dari biasanya di tahun tikus ini, yang berarti Anda perlu beristirahat lebih banyak. Ini hanya akan berlangsung selama beberapa bulan pertama tahun ini. Lakukan hal-hal penting, selagi Anda masih punya energi untuk melakukannya. Makan makanan berserat, karena ada potensi gangguan pencernaan di tahun ini. Hindari alkohol, jangan makan/minum terlalu banyak, dan hati-hati dengan cidera lama, terutama di bulan2 pertama tahun ini.",
                Link: "https://www.tionghoa.info/ramalan-shio-ular-2020-cinta-usaha-keuangan-kesehatan-dan-fengshui/?utm_source=dable"
            }
            break
        case "Kuda":
            result = {
                Cinta: "Kehidupan cinta Anda diprediksi tidak akan terlalu menggairahkan tahun ini. Anda perlu membuat perubahan menarik dalam hubungan, jika ingin mempertahankan keharmonisan bersama pasangan.",
                Usaha: "Ramalan karir shio kuda tahun 2020 memprediksi bahwa tahun ini akan ada hambatan dalam karier/bisnis Anda, dengan satu atau lain cara. Anda perlu melakukan sesuatu diluar kebiasaan, dan berhati2 untuk mengatasi hal ini. Alih-alih memaksakan diri, akan lebih baik untuk stay sejenak, dengan meningkatkan atau menambah keterampilan skill, yang berhubungan dengan kerja/usaha Anda. Anda akan memiliki beberapa masalah untuk maju di tempat kerja, jika Anda tidak belajar bagaimana bekerja sama dengan orang lain.",
                Keuangan: "Hindari investasi yang berisiko tinggi, dan akan lebih baik menilai sendiri hal-hal itu, sebelum mengambil keputusan. Walaupun tahun 2020 nanti shio kuda akan terkena siklus ciong, tetapi Anda masih bisa mengambil beberapa keuntungan darinya, terutama di awal2 bulan.",
                Kesehatan: "Ini adalah tahun untuk mencoba sesuatu yang lebih tenang, untuk keluar sejenak dari permasalahan dunia ini. Hindari aktivitas outdoor yang berlebihan, seperti mendaki gunung, atau olahraga ekstrim lainnya seperti paralayang atau bungee jumping.",
                Link: "https://www.tionghoa.info/ramalan-shio-kuda-2020-cinta-usaha-keuangan-kesehatan-dan-fengshui/?utm_source=dable"
            }
            break
        case "Kambing":
            result = {
                Cinta: "Karena Anda cenderung lebih spontan tahun ini, kehidupan cinta Anda juga akan lebih spontan. Jika Anda lajang, maka inilah saatnya Anda untuk lebih agresif terhadap pasangan. Hal-hal akan menjadi panas dan bersemangat tahun ini untuk para kambing. Sementara kehidupan romantis Anda akan semakin cepat, kehidupan sosial Anda dengan teman-teman dan keluarga Anda akan melambat di tahun ini. Anda juga akan memiliki lebih BANYAK tanggung jawab dengan masalah keluarga.",
                Usaha: "Ramalan karir shio kambing tahun 2020 meramalkan bahwa karier Anda akan mengalir dengan lancar tahun ini, selama Anda mengenal atasan dan rekan kerja Anda dengan lebih baik. Orang-orang ini akan menjadi batu loncatan yang Anda butuhkan, jika Anda ingin dalam karier Anda. Anda dapat menggunakan ide-ide kreatif di tempat kerja, dengan cara yang produktif. Bakat/keahlian khusus akan membantu Anda menonjol di tempat kerja.",
                Keuangan: "Ketika menyangkut keuangan, Anda yang bershio kambing memiliki cukup keberuntungan di tahun 2020. Keuangan Anda diprediksi masih cukup stabil di sepanjang tahun 2020 ini. Anda memiliki cukup uang untuk membiayai semua pengeluaran dengan mudah. Anda bahkan memiliki uang untuk melakukan trip wisata bersama keluarga. Anggaran dengan hati-hati, dan Anda pasti akan memiliki cukup uang untuk keperluan dan hal-hal menyenangkan dalam hidup juga.",
                Kesehatan: "Akan ada masalah tersembunyi dengan perut dan sistem pencernaan. Disarankan untuk melakukan pemeriksaan kesehatan secara teratur, dan banyak2 lah menenangkan pikiran. sebaiknya hindari mengambil bagian dalam kegiatan air yang berbahaya!",
                Link: "https://www.tionghoa.info/ramalan-shio-kambing-2020-cinta-usaha-keuangan-kesehatan-dan-fengshui/?utm_source=dable"
            }
            break
        case "Monyet":
            result = {
                Cinta: "Ramalan cinta shio monyet tahun 2020 memprediksi bahwa mereka yang bershio monyet cenderung merasa memiliki kontrol lebih besar (dominan) atas pasangan mereka pada tahun 2020. Tidak peduli apa pun status hubungan Anda di tahun ini, Anda harus mencoba meningkatkan keterampilan komunikasi. Jangan menjadi penekan juga. Menemukan zona menengah yang baik untuk ini, adalah cara yang bagus untuk mendapatkan yang terbaik dari interaksi sosial Anda dengan siapa pun: pasangan, teman, maupun anggota keluarga. Peluang memiliki bayi di tahun 2020 juga terbuka bagi pasangan baru.",
                Usaha: "Ramalan karir shio monyet 2020 menunjukkan bahwa Anda harus lebih kreatif ketika dibutuhkan di tempat kerja. Pastikan Anda bertanya kepada atasan sebelum mencoba sesuatu yang baru, untuk memastikan bahwa itu tidak akan memengaruhi Anda secara negatif nantinya. Cobalah untuk menyeimbangkan pekerjaan dan kehidupan rumah Anda. Jangan membawa masalah keluarga Anda ke kantor, dan jangan membawa pulang pekerjaan Anda ke rumah, kecuali itu sangat penting.",
                Keuangan: "Setelah mengalami ciong di tahun yang lalu, tahun 2020 ini seharusnya keuangan Anda perlahan akan membaik. Namun Anda perlu waspada dalam hal investasi yang berhubungan dengan air. Ketika berada di rumah, adalah ide bagus untuk mencoba mengerjakan hobi Anda yang bisa menghasilkan uang. Melakukan hal-hal kecil yang bisa menghasilkan beberapa dolar lebih banyak, dapat membuat dompet Anda lebih penuh di tahun 2020 ini.",
                Kesehatan : "Prospek kesehatan shio monyet adalah rata-rata (stabil) di tahun 2020. Anda diprediksi tidak akan mengalami sesuatu yang fatal. Meski begitu, Anda akan menjadi cukup sibuk dengan berbagai aktivitas di tahun ini, jadi pastikan untuk menjaga kesehatan Anda, agar tidak ambrol di akhir tahun. Kalau sudah begitu, maka akan keluar lagi pengeluaran untuk berobat. Jangan memaksa diri Anda secara berlebihan, jika tahu tidak dapat mengatasinya! Cobalah untuk memperbaiki diri dengan hal-hal kecil, seperti menjaga pola makan yang sehat, atau berolahraga lebih sering. Semua hal kecil ini dapat berdampak besar pada kesehatan Anda. Hati2 pada perubahan nafsu makan yang buruk.",
                Link: "https://www.tionghoa.info/ramalan-shio-monyet-2020-cinta-usaha-keuangan-kesehatan-dan-fengshui/?utm_source=dable"
            }
            break
        case "Ayam":
            result = {
                Cinta: "Ramalan cinta shio ayam tahun 2020 memprediksi bahwa Anda akan memiliki emosi yang lebih tinggi dalam kehidupan keseharian. Cobalah untuk menjadi lebih tenang dalam kehidupan cinta Anda tahun ini. Jalan-jalan bersama pasangan atau keluarga mungkin bisa membuat suasana hati Anda menjadi lebih enak. Jika Anda masih lajang, cobalah mencari tahu apa yang Anda inginkan dari pasangan, sebelum Anda mencari orang lain. Orang yang bershio ayam dikatakan cocok dengan orang yang bershio kerbau atau ular. Ini adalah tahun yang tepat untuk mulai memperkuat ikatan Anda dengan teman dan anggota keluarga Anda saat ini.",
                Usaha: "Anda akan merasa lebih impulsif di tempat kerja tahun ini. Anda kemungkinan tidak akan memiliki banyak proyek (tantangan) baru tahun ini. Memamerkan keterampilan Anda juga merupakan ide yang bagus untuk menariknya. Selalu berpikir ke depan ketika sedang bekerja. Apa yang Anda lakukan sekarang. dapat sangat memengaruhi apa yang akan terjadi pada beberapa tahun dari sekarang dalam karier/usaha.",
                Keuangan: "Ramalan keuangan shio ayam tahun 2020 memprediksi bahwa tidak ada kekayaan besar yang bisa dibuat di tahun ini. Anda perlu mengikuti aturan, dan tidak melakukan investasi yang berisiko, atau Anda akan membayar mahal harganya di akhir tahun. Anda cenderung bekerja lebih banyak, untuk menghasilkan lebih banyak di tahun ini. Anda akan senang ketika Anda mengerjakan hobi, yang juga bisa menghasilkan uang. Hal-hal kecil akan membantu Anda dalam menutupi defisit tahun ini. Waspada pada pengeluaran yang tidak terduga, terutama yang berhubungan dengan kesehatan!",
                Kesehatan: "Semakin optimis Anda, semakin besar kemungkinan Anda merasa lebih bersemangat. Orang yang bershio ayam mungkin mengalami beberapa cedera ringan, dan masalah kesehatan penyakit dalam. Tetapi tidak ada hal besar yang diperkirakan akan terjadi. Cobalah untuk menjaga diet rendah gula, dan aktif dalam bergerak untuk mencegah kekakuan sendi. Selain itu, perhatian besar harus diberikan pada kebersihan makanan. Mereka harus memperhatikan keselamatan saat sedang berada di luar!",
                Link: "https://www.tionghoa.info/ramalan-shio-ayam-2020-cinta-usaha-keuangan-kesehatan-dan-fengshui/?utm_source=dable"
            }
            break
        case "Anjing":
            result = {
                Cinta: "Masalah apa pun yang Anda miliki di tahun lalu, cenderung akan menghilang secara perlahan di tahun ini. Anda akan menemukan hubungan (status) yang lebih jelas di tahun ini. Ini akan membantu Anda yang sedang menjalin hubungan dengan pasangan. Bagi mereka yang sudah menikah, akan rentan terhadap perselisihan dengan pasangannya. Mereka harus berkomunikasi lebih banyak dengan anggota keluarga, untuk menjaga stabilitas dalam pernikahan. Coba habiskan waktu akhir pekan bersama orang-orang terdekat.",
                Usaha: "Ramalan karir shio anjing tahun 2020 menunjukkan bahwa Anda akan lebih beruntung di tempat kerja tahun ini. Pastikan untuk memperhatikan detail proyek/pekerjaan, atau akan membuat Anda masuk dalam masalah. Jangan lupa tentang tujuan dan impian Anda di tempat kerja. Pekerjaan Anda saat ini tidak akan menjadi tujuan akhir Anda, tapi merupakan batu loncatan untuk mencapai suatu tempat yang lebih besar.",
                Keuangan: "Ramalan keuangan shio anjing tahun 2020 meramalkan bahwa Anda akan menghasilkan (pendapatan) lebih banyak di tahun ini. Masuknya uang tunai ini dapat membantu Anda dalam menghindari beberapa masalah keuangan di tahun ini.",
                Kesehatan: "Ramalan kesehatan shio anjing tahun 2020 memprediksi bahwa Anda akan memiliki energi ekstra tahun ini. Tidak akan ada masalah kesehatan serius yang menghampiri Anda. Cobalah untuk menjaga tubuh Anda tetap sehat. Jangan lupa untuk menjaga tingkat stres Anda. Memiliki hobi kreatif dapat membantu dalam ini.",
                Link: "https://www.tionghoa.info/ramalan-shio-anjing-2020-cinta-usaha-keuangan-kesehatan-dan-fengshui/"
            }
            break
        case "Babi":
          result = {
              Cinta: "Ramalan cinta shio babi tahun 2020 memprediksi bahwa kehidupan cinta Anda bersama pasangan akan berjalan santai di tahun ini. Berbagai hal akan berjalan dengan lancar dalam hubungan Anda di tahun ini. Hindari ber-argumen berlebih, agar tidak merusak suasana. Ini adalah tahun yang baik bagi para pemilik shio babi untuk menikah, atau untuk merencanakan untuk kehadiran seorang bayi! Bagi yang masih jomblo single, pastikan agar berhati-hati dalam memulai sebuah hubungan yang baru.",
              Usaha: "Ramalan tahun babi 2020 menunjukkan bahwa Anda cenderung lebih ambisius di tempat kerja tahun ini. Ini adalah waktu yang tepat bagi Anda untuk mendapatkan promosi, atau untuk berpindah pekerjaan. Pastikan tetap berhubungan dengan rekan kerja dan bos Anda; hubungan ini akan membantu Anda untuk maju dalam karier",  
              Keuangan: "Para pemilik shio babi juga diprediksi akan berangsur2 membaik dalam hal keuangan tahun ini. Namun, jangan tergoda untuk membuang-buang uang untuk hal-hal yang tidak dibutuhkan. Ini akan membawa Anda ke dalam jeratan hutang, seperti hutang kartu kredit. Hati-hati untuk berinvestasi di bidang keuangan, seperti kurs mata uang asing. Hindari mengambil bagian dalam perjudian atau usaha berisiko lainnya, atau Anda benar2 akan tertipu dan kehilangan banyak uang! Akan ada potensi kehilangan aset dalam rumah, seperti dimasuki pencuri, atau  terjadi korsleting kebakaran.",
              Kesehatan: "Akan ada beberapa gangguan kesehatan kecil yang akan Anda alami tahun ini. Tetapi diprediksi tidak akan menjadi masalah kesehatan utama. Cobalah untuk memperkuat sistem kekebalan tubuh Anda, dengan mengkonsumsi vitamin dan melakukan diet seimbang. Berolahraga dan tidur yang cukup juga dapat membantu meningkatkan kesehatan. Pastikan untuk mengambil waktu untuk santai, dan mempedulikan diri Anda sendiri. Apabila ada waktu, cobalah untuk menantang diri Anda, dengan pergi ke tempat2 yang jauh, seperti pergi hiking, jalan2 ke luar negeri, atau sebagainya. Bagi kebanyakan orang yang bershio babi, kesehatan Anda akan cukup baik tahun ini. Kurangi minuman2 yang beralkohol, atau itu akan membawa menjatuhkan pada Anda.",
              Link: "https://www.tionghoa.info/ramalan-shio-babi-2020-cinta-usaha-keuangan-kesehatan-dan-fengshui/#more-13471"
            }
          break;

    }

return result
}



function myRamalan(){
    var nama = document.getElementById("nama").value;
    var tanggal = document.getElementById("tanggal").value;
    //validasi 
    d = new Date(tanggal)
    d0 = new Date()
    d1 = new Date("Feb 05 1924") 
    if (nama===''){
        alert('Kalau mau diramal, silakan isi nama Anda')
    }
    if (tanggal ==''){
        alert('Kalau mau diramal, silakan isi tanggal lahir Anda')   
    }
    else if (d.getTime() < d1.getTime()){
        alert('Usia Anda sudah terlalu tua untuk diramal')
    }
    else {
        myShio(tanggal)
        //alert('Shio anda: '+gShio +' dan elemen anda: '+gElemen)

        tionghoa(gShio)
        
        if(document.getElementById("cinta").checked){
            //alert(result["Cinta"])
            document.getElementById('ramalan').innerHTML = "Hi "+nama+", dengan shio "+gShio+" dan elemen "+gElemen+" maka ramalan anda untuk  cinta adalah: <br>"+ result['Cinta']+"<br> Ramalan selengkapnya baca di: <a href='"+result["Link"]+"'>link</a>";
        }
        else if(document.getElementById("usaha").checked){
            //alert(result["Usaha"])
            document.getElementById('ramalan').innerHTML = "Hi "+nama+", dengan shio "+gShio+" dan elemen "+gElemen+" maka ramalan anda untuk  usaha adalah: <br>"+result['Usaha']+"<br> Ramalan selengkapnya baca di: <a href='"+result["Link"]+"'>link</a>";
        }
        else if(document.getElementById("keuangan").checked){
            //alert(result["Keuangan"])
            document.getElementById('ramalan').innerHTML = "Hi "+nama+", dengan shio "+gShio+" dan elemen "+gElemen+" maka ramalan anda untuk  keuangan adalah: <br>"+result['Keuangan']+"<br> Ramalan selengkapnya baca di: <a href='"+result["Link"]+"'>link</a>";
        }
        else if(document.getElementById("kesehatan").checked){
            //alert(result["Kesehatan"])
            document.getElementById('ramalan').innerHTML = "Hi "+nama+", dengan shio "+gShio+" dan elemen "+gElemen+" maka ramalan anda untuk  kesehatan adalah: <br>"+result['Kesehatan']+"<br> Ramalan selengkapnya baca di: <a href='"+result["Link"]+"'>link</a>";
        }  
          
    }

}


  
