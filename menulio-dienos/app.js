const days = [
  ["🌑","Žibintas",["Tamsoje uždegtas žibintas apšviečia mažą plotą: stalą, rankas, dar tuščią lapą. Tolimesnis kelias lieka nematomas, tačiau jau gali pasirinkti, ką pradėsi jame kurti.","Pirmoji Mėnulio diena atveria vietą sumanymui. Raganos tyloje mintis dar neprivalo turėti plano, kainos ar kitų pritarimo. Leisk jai pasirodyti pakankamai aiškiai, kad atskirtum savo norą nuo svetimo lūkesčio. Kokio gyvenimo gabalėlio ilgiesi? Ką norėtum užauginti per ateinantį ciklą?","Šios pradžios šešėlis — užpildyti visas galimybes iš karto. Pažadėti sau tiek, kad dar nepradėjusi pavargtum. Išsirink vieną sumanymą ir suteik jam pirmą sakinį. Žibinto šviesoje jo kol kas pakanka.","<strong>Kokį savo norą renkuosi auginti šiame cikle?</strong>"]],
  ["🌑","Gausos kraitė",["Atvėrusi kraitę randi tai, ką rinkai ilgai: audinius, įrankius, pamokas, kitų dovanotus daiktus. Kai kas pravers dabar. Kai kas užima vietą vien todėl, kad kadaise buvo brangu.","Antroji diena klausia, kuo maitinsi savo pradžią. Maistu, žiniomis, bendravimu, darbu — visa, ką priimi, tampa tavo gyvenimo medžiaga. Pajusk skirtumą tarp alkio ir įpročio imti dar. Gausa turi skonį; persisotinimas jį užgožia.","Raganos kraitėje telpa ir gebėjimas priimti pagalbą. Kartais sunkiau ištiesti ranką, negu viską užsidirbti pačiai. Kartais, priešingai, kaupi tiek, kad nebelieka judesio. Atsirink tai, ką iš tiesų gali panaudoti ir kas palieka gyvybės.","<strong>Ko man iš tikrųjų reikia, kad pradėtas sumanymas augtų?</strong>"]],
  ["🌑","Vilkas",["Miško pakraštyje vilkas sustoja. Jo kūnas budrus, ausys gaudo garsą, tačiau judesys dar neprasidėjo. Sukaupta jėga laukia krypties.","Trečiąją dieną noras ima reikalauti veiksmo. Gali ryškiau pajusti pyktį, nekantrumą, poreikį apginti savo vietą. Raganos lauke šie impulsai parodo, kur per ilgai tylėjai arba leidai spręsti už save. Išgirsti juos verta prieš leidžiant jiems vairuoti.","Vilko šešėlis — paversti kiekvieną susidūrimą kova. Tuomet jėga išsenka ginant net tai, kas tau nebesvarbu. Aiški riba taupo daugiau energijos negu ilgas puolimas: vienas pasakytas sakinys, nutrauktas ginčas, konkretus darbas. Pasirink, ką tavo jėga šiandien saugos.","<strong>Kokią ribą turiu apginti ir kaip tai padarysiu sąmoningai?</strong>"]],
  ["🌑","Ąžuolas",["Ąžuolo šaknys siekia žemę, kurios paviršiuje nematyti. Šakos auga į skirtingas puses, tačiau kiekviena priklauso tam pačiam medžiui.","Ketvirtoji diena grąžina prie žinojimo kilmės. Vienus įsitikinimus atradai pati, kitus išmokai taip anksti, kad jie atrodo savaime suprantami. Giminės balsas, vaikystės taisyklė, perskaitytas sakinys gali gyventi tavo sprendimuose daugelį metų.","Ragana prie Ąžuolo mokosi skirti atramą nuo sustingusios nuostatos. Paveldėta išmintis stiprina, kai gali su ja kalbėtis. Kai uždraudžiama klausti, šaknys ima panašėti į pančius. Prieš pakartodama seną tiesą ar priimdama sprendimą, pažvelk, kokia patirtis jį pagrindžia.","<strong>Kuri mano laikoma tiesa šiandien prašo būti suprasta iš naujo?</strong>"]],
  ["🌑","Devyniaragis",["Devyniaragio ragai išsišakoja plačiai. Kad praeitų tankmę, jam tenka pasirinkti taką ir pajusti kiekvieną judesį.","Penktąją dieną pradžios sumanymas susitinka su tavo principais. Lengva norėti tol, kol noras nieko nekainuoja. Sunkiau išlikti jam ištikimai, kai tenka atsisakyti patogaus pritarimo, persitvarkyti dieną ar pripažinti klaidą.","Šiame Raganos slenkstyje patirtis turi būti įsisavinta: iš to, ką sužinojai, kažkas tampa tavo laikysena. Tačiau ištikimybė gali sukietėti į užsispyrimą. Tada saugai ankstesnį sprendimą net matydama, kad jis nebetarnauja pasirinktai vertei. Devyniaragis leidžia keisti taką išlaikant kryptį.","<strong>Kokiai savo vertybei noriu likti ištikima, net jei teks pakeisti veikimo būdą?</strong>"]],
  ["🌒","Gervė",["Gervė stovi sekliame vandenyje. Menkas ratilas, vėjo posūkis, nendrės judesys jai tampa pastebimi tarp tylos tarpų.","Šeštoji diena atveria jautresnį santykį su aplinka. Aušrinės šviesoje gali išgirsti intonaciją, kurios anksčiau nepastebėjai, prisiminti sapną, pajusti netikėtą minties aiškumą. Šiam dėmesiui reikia erdvės. Nuolatinis aiškinimas greitai užgožia tai, kas dar tik ryškėja.","Gervės šešėlis prasideda ten, kur kiekvienai smulkmenai skubiai priskiriama žinia. Palik vietos nežinojimui. Stebėk, kas kartojasi ir su kuo tai susijungia tavo patirtyje. Kartais užtenka užrašyti vieną vaizdinį ir leisti jo reikšmei subręsti.","<strong>Ką pastebiu, kai neskubu visko iš karto paaiškinti?</strong>"]],
  ["🌒","Gaidys",["Gaidžio balsas perskrodžia kiemo tylą. Ištartas garsas jau priklauso visiems, kurie jį išgirdo.","Septintoji diena sutelkia dėmesį į kalbą. Pažadas sukuria laukimą, apkalba pakeičia santykį, aiškus sakinys gali atverti duris, prie kurių ilgai mindžikavai. Aušrinės laike tavo balsas įgauna vietą pasaulyje.","Pasiklausyk, ką kartoji apie save. „Aš visada“, „man niekada“, „niekas nenori“ gali tapti ankšta kasdienybės tvarka. Kartu saugokis žodžių, kurie skamba gražiai, bet slepia tikrą ketinimą. Šiandien verta kalbėti tiek, kiek gali paremti savo veiksmu, ir išgirsti atsakymą iki galo.","<strong>Kokį sakinį esu pasirengusi pasakyti ir prisiimti jo pasekmes?</strong>"]],
  ["🌒","Ryto žarija",["Po pelenais teberusena žarija. Vakar degusio medžio nebesurinksi, tačiau jo karštis gali užkurti naują ugnį.","Aštuntoji diena neša perkeitimo temą. Gali iškilti senas poelgis, neužbaigtas pokalbis ar būdas gyventi, kuris išnaudojo savo galimybes. Aušrinė kviečia pamatyti, ką iš šios patirties galima pernešti į kitą formą.","Čia reikia drąsos pripažinti savo dalį. Kaltė, kuri tik kartojama, nieko nepakeičia; atsakomybė gali tapti atsiprašymu, pataisytu darbu ar nauju susitarimu. Kitas kraštutinumas — sudeginti viską iš nekantrumo. Atsirink, kas baigėsi, ir išsaugok gyvąją žariją.","<strong>Ką iš senos patirties galiu perkeisti į kitokį veiksmą?</strong>"]],
  ["🌒","Šikšnosparnis",["Tamsoje pažįstamas daiktas įgauna svetimą pavidalą. Pakanka menko garso, kad vaizduotė užbaigtų istoriją.","Devintoji diena kelia baimės, pagundos ir klaidinančio įspūdžio klausimą. Aušrinės kelionėje tai vieta, kur pirmąjį pasitikėjimą tenka patikrinti. Stiprus jausmas prašo dėmesio, tačiau jo pasiūlytas paaiškinimas dar gali būti klaidingas.","Šikšnosparnis tamsoje orientuojasi klausydamasis atgarsio. Ir tu gali grįžti prie to, kas iš tikrųjų pasakyta, padaryta, matyta. Ypač kai norisi skubiai apkaltinti, pažadėti ar patikėti tuo, kas pataiko tiesiai į tavo troškimą. Palik tarp pojūčio ir sprendimo šiek tiek erdvės.","<strong>Ką šioje situacijoje žinau, o ką prie jos pridėjo mano baimė ar noras?</strong>"]],
  ["🌒","Šaltinis",["Šaltinio vanduo pasirodo paviršiuje, nors jo kelias prasidėjo giliai po žeme. Gali atsigerti nežinodama visų vietų, kurias jis perėjo.","Dešimtoji diena kreipia į gyvybės tęstinumą: šeimą, giminę, namus ir patirtį, perduodamą per kasdienius veiksmus. Aušrinės augimui reikia atramos. Ją gali rasti prisimindama, kas mokė, maitino, saugojo, suteikė vietos būti.","Ne kiekviena paveldėta tėkmė skaidri. Gali dėkoti už gautą gyvybę ir kartu keisti skaudų santykių įprotį. Šaltinis nereikalauja atkurti gražios šeimos paveikslo. Jis leidžia atsirinkti, kuo maitinsi savo namus ir ką per tave gaus tie, kurie ateis vėliau.","<strong>Kokią iš savo kilmės ateinančią atramą noriu tęsti?</strong>"]],
  ["🌒","Rūtų vainikas",["Vainikas uždedamas ant galvos. Jo svoris menkas, tačiau prisiimta vieta keičia laikyseną.","Vienuoliktoji diena sutelkia jėgą. Noras gali pasidaryti ryškus, kūnas — neramus, sprendimas — skubus. Aušrinės tarpsnio pabaigoje svarbu išmokti laikyti tai, kas pabudo. Galia reikalauja dėmesio tam, ką pradedi ir kaip paveiki aplinką.","Rūtų vainikas Laumijoje žymi sąmoningai priimamą savo galios ribą. Čia lengva pažadėti daugiau, negu pajėgsi išnešti, arba savo įkarščiu užgožti kitą. Pasirink vieną darbą, kuriam gali skirti visą dėmesį, ir stebėk, kada jėga tampa įtampa. Sustoti laiku irgi reikia valios.","<strong>Kuriai užduočiai galiu skirti savo jėgą ir išlaikyti atsakomybę iki galo?</strong>"]],
  ["🌕","Taurė",["Į pilną taurę pilamas vanduo liejasi per kraštus. Tuščia taurė dar turi vietos priimti.","Dvyliktoji diena atveria širdies talpą: gebėjimą išgirsti, priimti pagalbą, atsiliepti į kito skausmą. Austėjos ryšiuose dovana cirkuliuoja, kai yra ir duodantis, ir galintis priimti žmogus.","Taurės šešėlis — gailestis, kuriame kitas tampa mažesnis, o tu reikalinga tik tol, kol jį gelbsti. Kitas šešėlis — užverti širdį, kad niekas daugiau jos nepasiektų. Tarp jų yra jautrus, konkretus susitikimas: paklausti, ko žmogui reikia, ir pajusti, kiek iš tiesų gali duoti. Atjauta išlieka gyva, kai joje telpi ir pati.","<strong>Kokią pagalbą šiandien galiu nuoširdžiai duoti arba priimti?</strong>"]],
  ["🌕","Verpstė",["Verpstė sukasi, o siūlas ilgėja. Judesys kartojasi, tačiau rankose jau daugiau audinio medžiagos.","Tryliktoji diena sugrąžina seną temą, susitikimą ar nebaigtą darbą. Austėjos rate pasikartojimas leidžia pamatyti, kaip gyveni su tuo, ką jau žinai. Gal aplinkybės panašios, tačiau šiandien turi kitą ribą, daugiau patirties ar drąsos pasakyti tiesą.","Šešėlyje lengva nuspręsti: „vėl tas pats, niekas nesikeičia“. Arba sugrįžimą palaikyti leidimu pakartoti seną pasirinkimą. Pažiūrėk atidžiau. Kurioje vietoje siūlas susimazgoja? Ką dabar gali padaryti kitaip, net jei pokytis bus mažas?","<strong>Ką šiame pasikartojime jau matau kitaip negu anksčiau?</strong>"]],
  ["🌕","Birbynė",["Per lauką nusidriekia birbynės garsas. Kad jis skambėtų, vien įkvėpti neužtenka — orą reikia paleisti.","Keturioliktoji diena kviečia atsiliepti į pasirinktą kryptį. Austėjos laike idėja jau gali ieškoti žmonių, darbo vietos, konkretaus žingsnio. Tavo atsakas tampa girdimas: išsiųstu pasiūlymu, pradėtu darbu, įvardytu sprendimu.","Šios dienos šešėlis — nuolat laukti dar vieno patvirtinimo arba supainioti garsiausią kvietimą su savuoju. Viskas prašo dėmesio, tačiau tavo laikas ribotas. Atsirink tą veiksmą, kuriam jau turi pakankamai pagrindo. Jo nereikia išpūsti į viso gyvenimo pažadą.","<strong>Į kokį kvietimą atsiliepsiu konkrečiu žingsniu?</strong>"]],
  ["🌕","Gyvatė",["Gyvatė slysta arti žemės. Jos judesys primena, kaip greitai kūnas atsiliepia į tai, kas traukia ar grasina.","Penkioliktoji diena išryškina troškimą: aistrą, pavydą, alkį būti pasirinkta, norą turėti galią. Austėjos pilnatvėje jausmai gali užimti visą regėjimo lauką. Tada norimas dalykas ima atrodyti būtinas, o kliūtis — nepakeliama.","Gyvatė leidžia pažinti savo geismą jo neslepiant po padoriais paaiškinimais. Ko iš tikrųjų nori? Kokios kainos nenori pastebėti? Troškimas gali maitinti kūrybą ir artumą, tačiau skubus jo vykdymas gali palikti svetimų ar savų ribų nuolaužas. Duok jam vardą prieš duodama veiksmą.","<strong>Ko iš tikrųjų trokštu ir kokią ribą pasirinksiu išlaikyti?</strong>"]],
  ["🌕","Gulbė",["Gulbė slenka vandens paviršiumi. Po juo dirba kojos, nors iš kranto matyti tik lygus judesys.","Šešioliktoji diena grąžina pusiausvyros pojūtį. Po stipraus troškimo gali aiškiau pajusti, kas leidžia kvėpuoti, o kas vis dar verčia įsitempti. Austėjos darna kuriama tarp tavo vidaus, žodžių ir elgesio.","Ramybė, palaikoma nutylint visus nesutarimus, ilgainiui tampa sunki. Gulbės šešėlis — gražus paviršius, po kuriuo viskas plaka iš baimės sukelti bangą. Kartais darnai reikia ramaus pokalbio, kartais sutvarkytos erdvės ar atšaukto perteklinio įsipareigojimo. Leisk išorei priartėti prie to, kaip iš tiesų gyveni.","<strong>Ką galiu suderinti, kad mano vidus ir kasdienis gyvenimas mažiau prieštarautų vienas kitam?</strong>"]],
  ["🌕","Javų pėdas",["Pėdas surištas, grūdai subrendę. Prieš skaičiuojant, ką sėsi kitąmet, yra laikas prisėsti prie stalo.","Septynioliktoji diena kalba apie gyvenimo pilnumą: kūną, artumą, kūrybą, šventę ir laisvę džiaugtis tuo, kas užaugo. Austėjos laiko pabaigoje derlius gali būti labai konkretus — baigtas darbas, išsaugotas ryšys, vakaras, kuriame nebereikia skubėti.","Šešėlyje malonumas tampa būdu užgožti nuovargį arba pareiga atrodyti laimingai. Kartais pati sau atimi džiaugsmą, vos pasiekusi rezultatą paskelbdama kitą užduotį. Pajusk, kuo iš tiesų norisi mėgautis ir su kuo gera tuo dalytis. Derlių leidžiama ir ragauti.","<strong>Kuo galiu pasidžiaugti, nepaversdama to dar viena pareiga?</strong>"]],
  ["🌖","Šulinys",["Pasilenkusi virš šulinio matai savo veidą. Pajudinus vandenį, tas pats veidas išsiskaido.","Aštuonioliktoji diena kelia atspindžio klausimą. Kito žodžiai, įvykis ar pasikartojantis santykis gali parodyti tavo lūkesčius ir jautrias vietas. Medeinos žvilgsniui reikia gylio, tačiau kartu — gebėjimo palaukti, kol nusės vanduo.","Šulinio šešėlis yra patikėti pirmu atspindžiu. Kieno nors abejingumą paversti savo menkumo įrodymu, kritiką — visuotinės tiesos balsu, o palankumą — savo neklystamumo ženklu. Kito elgesys turi ir jo paties priežasčių. Stebėk, kokią reikšmę suteiki tam, kas įvyko, ir ar ji remiasi visa situacija.","<strong>Ką man rodo pats įvykis, o ką jame atspindi mano lūkestis?</strong>"]],
  ["🌖","Laumė",["Laumės rankose pinasi gijos. Iš jų gali rastis audinys, laikantis ir šildantis, arba tinklas, kuriame sunku pajudėti.","Devynioliktoji diena kreipia į ryšius ir įtaką. Pažadai, skolos, nutylėjimai, noras patikti — visa tai gali surišti stipriau už atvirą draudimą. Medeinos lauke verta pamatyti, kur tavo sprendimas jau seniai priimamas už tave.","Laumės šešėlį galima atpažinti ir savo rankose: padėti tikintis paklusnumo, nutylėti sąlygą, sukurti kaltę, kad žmogus pasiliktų. Išrišti giją dažnai reiškia pasakyti tikrą susitarimą. Kai abi pusės žino, ką renkasi, ryšys tampa laisvesnis.","<strong>Kuriame ryšyje man reikia aiškesnio susitarimo arba daugiau laisvės?</strong>"]],
  ["🌖","Erelis",["Pakilęs erelis mato upės vingį, kurio einanti pakrante dar negali aprėpti. Iš aukščio atskiros vietos susijungia į kelią.","Dvidešimtoji diena kviečia pažvelgti į didesnį savo gyvenimo mastą. Medeinos savarankiškumas leidžia atsitraukti nuo vieno nesėkmingo pokalbio ar darbo ir prisiminti, kam visa tai skirta. Gal paaiškės, kad keisti reikia kelią, gal tik vieną jo atkarpą.","Aukštis turi savo šešėlį: pradėti manyti, kad iš viršaus viską supranti geriau už gyvenančius apačioje. Platesnė perspektyva vertinga tada, kai padeda grįžti su aiškesniu pasirinkimu. Pamatyk visumą ir surask joje savo vietą.","<strong>Koks sprendimas išryškėja, kai pažvelgiu už dabartinės kliūties?</strong>"]],
  ["🌖","Avilys",["Avilio dūzgesys susideda iš daugybės judesių. Kiekviena bitė grįžta su savo nešuliu, o bendras darbas maitina visumą.","Dvidešimt pirmoji diena jungia drąsą, bendrą veikimą ir atsakomybę už pasirinktą kryptį. Medeinos savarankiškumas čia susitinka su kitų žmonių jėga. Vienai sunkiai pajudinamas darbas gali pasikeisti atsiradus tikram susitarimui.","Avilio šešėlis — minia, kurioje nebeklausiama, kur einama, arba bendrystė, kurią išlaiko vieno žmogaus išsekimas. Tavo indėlis turi ribas. Tavo balsas turi vietą. Jei savo rato dar neturi, gali pradėti nuo to, kokiomis sąlygomis jame norėtum dalyvauti. Bendrą kryptį verta rinktis sąmoningai.","<strong>Prie kokio bendro tikslo noriu prisidėti ir už ką jame prisiimu atsakomybę?</strong>"]],
  ["🌖","Raktas",["Raktą gali laikyti delne ilgai, kol surandi duris, kurioms jis skirtas.","Dvidešimt antroji diena sutelkia mokymąsi, atmintį ir gebėjimą skaityti prasmes. Medeinos patirtis padeda sujungti anksčiau atskirai gulėjusias detales: sakinį, darbo klaidą, pasikartojantį pasirinkimą. Supratimas ateina tada, kai ryšys tampa aiškus.","Rakto šešėlis — visoms durims taikyti tą patį atsakymą. Vieną sėkmingą paaiškinimą paversti visų žmonių taisykle arba simboliu užrakinti gyvą žmogų. Tikrink savo žinojimą klausimais ir patirtimi. Dalydamasi tuo, ką supratai, palik kitam vietos pamatyti kitaip.","<strong>Ką dabar suprantu aiškiau ir kaip galiu patikrinti šį supratimą?</strong>"]],
  ["🌖","Medžioklės ragas",["Nuaidi ragas, sujuda giria. Susitelkusi jėga gali greitai virsti vijimusi, kuriame nebesvarbu, kas ir kodėl bėga.","Dvidešimt trečioji diena išbando santykį su provokacija, agresija ir grupės įkarščiu. Medeinos laiko pabaigoje reikia atpažinti akimirką, kai teisus pyktis pradeda ieškoti taikinio. Noras apginti gali peraugti į norą nubausti.","Medžioklės ragas čia reiškia ir galią sustabdyti vijimąsi. Prieš atsakydama, prisidėdama prie puolimo ar griaudama susitarimą, įvardyk, kas iš tikrųjų pažeista. Kartais būtinas tvirtas veiksmas. Jam padeda aiški riba ir konkretus tikslas; įtūžis juos lengvai pameta.","<strong>Kokią ribą iš tiesų ginu ir kur mano reakcija jau pradeda ją peržengti?</strong>"]],
  ["🌖","Meška",["Meška išlenda iš tankmės. Jos kūno svoriui nereikia paaiškinimo: kiekvienas žingsnis remiasi žeme.","Dvidešimt ketvirtoji diena kalba apie sukauptą gyvybinę ir kūrybinę jėgą. Velionos laikas prasideda su tuo, ką atsinešei iš viso ciklo. Ši atrama gali tapti darbu, namais, kūriniu — tuo, kas išlaiko formą ir po pirmojo įkvėpimo.","Dalis stiprybės išmokta, dalies kilmės dar nežinai. Giminės amatas, ištvermė, gebėjimas pasirūpinti gali gyventi tavo rankose. Juos galima tęsti savo būdu. Meškos šešėlis — įrodinėti galią nepaisant kūno arba visą ją uždaryti savyje. Pajusk, kiek jėgos turi dabar ir kam nori ją skirti.","<strong>Kokią savo jėgą jau atpažįstu ir kam noriu suteikti formą jos padedama?</strong>"]],
  ["🌘","Gilė",["Gilė guli po lapais. Jos viduje sutelpa būsimo medžio galimybė, tačiau iš išorės beveik niekas nejuda.","Dvidešimt penktoji diena suteikia vietos lėtumui, vienumai ir vidiniam klausymuisi. Velionos erdvėje patirtis gali nusėsti giliau, kai jos nuolat neverčiama rezultatu. Kartais supratimas subręsta tik nustojus jį tampyti į šviesą.","Gilės šešėlis — slėptis taip ilgai, kad poilsis tampa atsiribojimu nuo gyvenimo. Kitas kraštutinumas — nepakelti tylos ir tuoj pat užpildyti ją svetimais atsakymais. Skirk sau ramų tarpą. Pajusk, kas jame iškyla savaime ir kas dar gali likti neatsakyta.","<strong>Kuriam klausimui dabar reikia ramaus brendimo?</strong>"]],
  ["🌘","Pelkė",["Pelkės paviršių dengia žolė. Iš tolo takas atrodo patikimas, kol po koja nesujudėjo žemė.","Dvidešimt šeštoji diena leidžia patikrinti puikybę, tuščią kalbą ir tariamą išmintį. Velionos laike verta pastebėti, kur daugiau jėgos sunaudoji pasakodama, kaip gerai supranti, negu iš tiesų klausydamasi ar veikdama.","Pelkė gali įtraukti per pritarimą: malonu būti ta, kuri viską žino, visus perprato, jau seniai numatė. Tačiau tada tampa sunku pasakyti „klydau“. Pažiūrėk, kuo remiasi tavo įsitikinimas. Tikras pagrindas išlaiko klausimus; pasipūtęs atsakymas nuo jų ginasi.","<strong>Kur mano tikrumas turi atramą, o kur jį palaiko noras būti teisia?</strong>"]],
  ["🌘","Nendrė",["Nendrė auga ten, kur susitinka vanduo, žemė ir vėjas. Jos judesys parodo tai, ko pačio vėjo pavidalu nepamatysi.","Dvidešimt septintoji diena siejama su nuojauta ir netikėtai atsiveriančia kryptimi. Velionos tyloje anksčiau nesusiję patirties gabalai gali susijungti. Atsakymas kartais pasirodo paprastai — pokalbio nuotrupoje, kūryboje, prisiminime.","Nendrės lankstumas padeda tokį supratimą priimti ir patikrinti. Jei laikysiesi vienintelio iš anksto paruošto atsakymo, praleisi tai, kas iš tiesų keičia klausimą. Jei seksi kiekvieną įspūdį, pamesi šaknis. Leisk nuojautai pasiūlyti kryptį ir stebėk, kaip ji susitinka su gyvenimu.","<strong>Kokiai naujai krypčiai galiu atsiverti, išlaikydama ryšį su savo patirtimi?</strong>"]],
  ["🌘","Vandens lelija",["Vandens lelijos žiedas laikosi paviršiuje, o šaknys siekia dugną. Tarp jų — visas vandens gylis.","Dvidešimt aštuntoji diena kviečia aprėpti nueitą kelią. Velionos ramybėje galima pamatyti ir tai, kas pavyko, ir tai, kas kainavo daugiau, negu tikėjaisi. Patirtis ima jungtis į suprantamą visumą, kai nė vienos jos dalies nereikia skubiai išmesti.","Lelijos šešėlis — gražia ramybės istorija uždengti tai, kas dar skauda. Skaidrumas leidžia matyti dugną. Gal jame liko nuoskauda, nebaigtas darbas ar pripažinimo laukiantis džiaugsmas. Suteik jiems vietą savo istorijoje. Iš čia lengviau atskirti, ką parsineši toliau.","<strong>Ką apie nueitą kelią galiu pamatyti, kai leidžiu jame būti visai savo patirčiai?</strong>"]],
  ["🌘","Pelenai",["Židinys išdegęs. Pelenai dar saugo vakarykštės ugnies šilumą, tačiau iš jų vienų naujo laužo nesukursi.","Dvidešimt devintoji diena užbaigia ciklą per atsirinkimą ir apsivalymą. Kai jėgų mažiau, senos baimės ar neaiškūs pažadai gali atrodyti įtikinamesni. Veliona kviečia sumažinti triukšmą ir pasirūpinti tuo, kas saugo tavo ramybę bei ribas.","Pelenų šešėlis — nuovargio akimirką paskelbti nuosprendį visam gyvenimui. Arba desperatiškai gaivinti tai, kas jau baigėsi. Šiandien gali užtekti sutvarkyti vieną kampą, užbaigti vieną susitarimą, atsitraukti nuo svetimo konflikto. Tamsos slenkstis prašo atidaus žingsnio ir mažiau pertekliaus.","<strong>Ką galiu užbaigti ar pašalinti, kad į kitą ciklą eičiau lengviau?</strong>"]],
  ["🌘","Rauda",["Raudoje vardijama tai, kas buvo: žmogus, vieta, bendras kelias. Balsas suteikia pabaigai pavidalą.","Trisdešimtoji Mėnulio diena pasirodo ne kiekviename cikle. Laumijoje ji skirta išlydėti nueitą kelią: susirinkti patirtį, pagerbti gautą dovaną, pripažinti netektį ir tai, ko nepavyko užbaigti taip, kaip norėjai.","Velionos rate dėkingumas gali gyventi šalia liūdesio. Nereikia priversti savęs atleisti ar viskam surasti gražią prasmę. Kartais atsisveikinimo sakinys labai paprastas: tai buvo svarbu, tai mane pakeitė, toliau eisiu kitaip. Pabaiga suteikia vietos naujai pradžiai, kai leidžiama jai iš tikrųjų įvykti.","<strong>Ką iš šio ciklo išsaugau ir su kuo esu pasirengusi atsisveikinti?</strong>"]]
];

const goddessGroups = [
  [5, "Ragana", "https://i.postimg.cc/FzFgKv1Z/Raganafz.jpg"],
  [11, "Aušrinė", "https://i.postimg.cc/9MdJM1bh/Ausrinefz.jpg"],
  [17, "Austėja", "https://i.postimg.cc/65mLBDK5/Austejafz.jpg"],
  [23, "Medeina", "https://i.postimg.cc/wvgDWzXb/Medeinafz.jpg"],
  [30, "Veliona", "https://i.postimg.cc/hv3xP7H3/Velionafz.jpg"]
];

const VILNIUS = new Astronomy.Observer(54.6872, 25.2797, 112);
const MINUTE = 60000;

const phaseRows = [
  ["Jaunatis", ["🌖","🌗","🌘","🌑","🌒","🌓","🌔"]],
  ["Pirmasis ketvirtis", ["🌘","🌑","🌒","🌓","🌔","🌕","🌖"]],
  ["Pilnatis", ["🌒","🌓","🌔","🌕","🌖","🌗","🌘"]],
  ["Paskutinis ketvirtis", ["🌔","🌕","🌖","🌗","🌘","🌑","🌒"]]
];

function getLunarState(now = new Date()) {
  const previousNewMoon = Astronomy.SearchMoonPhase(0, now, -40);
  const nextNewMoon = Astronomy.SearchMoonPhase(0, now, 40);
  if (!previousNewMoon || !nextNewMoon) throw new Error("Nepavyko apskaičiuoti jaunaties.");

  const boundaries = [previousNewMoon.date];
  let cursor = new Date(previousNewMoon.date.getTime() + MINUTE);

  while (boundaries.length < days.length && cursor < nextNewMoon.date) {
    const moonrise = Astronomy.SearchRiseSet(Astronomy.Body.Moon, VILNIUS, +1, cursor, 3, 0);
    if (!moonrise || moonrise.date >= nextNewMoon.date) break;
    boundaries.push(moonrise.date);
    cursor = new Date(moonrise.date.getTime() + MINUTE);
  }

  let currentIndex = 0;
  boundaries.forEach((boundary, index) => {
    if (boundary <= now) currentIndex = index;
  });

  const phaseAngle = Astronomy.MoonPhase(now);
  const phaseIndex = phaseAngle < 45 || phaseAngle >= 315 ? 0
    : phaseAngle < 135 ? 1
      : phaseAngle < 225 ? 2 : 3;

  return {
    currentIndex: Math.min(days.length - 1, currentIndex),
    phaseIndex,
    previousNewMoon: previousNewMoon.date,
    nextNewMoon: nextNewMoon.date,
    boundaries
  };
}

window.LaumijaMoon = { getLunarState };

const grid = document.querySelector("#day-grid");
const reading = document.querySelector("#reading");

function openDay(index, updateHash = true) {
  const day = days[index];
  document.querySelector("#reading-day").textContent = `${day[0]} ${index + 1} mėnulio diena`;
  document.querySelector("#reading-title").textContent = day[1];
  document.querySelector("#reading-body").innerHTML = day[2].map(text => `<p>${text}</p>`).join("");
  reading.classList.add("open");
  if (updateHash) history.replaceState(null, "", `#diena-${index + 1}`);
  reading.focus({ preventScroll: true });
  reading.scrollIntoView({ behavior: "smooth", block: "start" });
}

function closeDay() {
  reading.classList.remove("open");
  history.replaceState(null, "", location.pathname + location.search);
}

document.querySelector("#close-reading").addEventListener("click", closeDay);

function fallbackImage(name) {
  const safeName = name.replace(/[<>&"']/g, "");
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 800"><rect width="1200" height="800" fill="#2d392f"/><circle cx="600" cy="330" r="150" fill="#d8c59b" opacity=".9"/><text x="600" y="610" fill="#f4eee0" font-family="serif" font-size="72" text-anchor="middle">${safeName}</text></svg>`;
  return `data:image/svg+xml;charset=utf-8,${encodeURIComponent(svg)}`;
}

function renderCalendar(now = new Date()) {
  const state = getLunarState(now);
  const activePhase = phaseRows[state.phaseIndex];

  document.querySelector("#phase-name").textContent = activePhase[0];
  document.querySelector("#phase-strip").innerHTML = activePhase[1]
    .map((symbol, index) => `<span class="${index === 3 ? "active" : (index === 2 || index === 4 ? "near" : "")}">${symbol}</span>`)
    .join("");

  days.forEach((day, index) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = `day-button${index === state.currentIndex ? " current" : ""}`;
    button.setAttribute("aria-label", `${index + 1} mėnulio diena – ${day[1]}`);
    button.innerHTML = `<span class="phase">${day[0]}</span><span class="number">${index + 1}</span>`;
    button.addEventListener("click", () => openDay(index));
    grid.append(button);
  });

  const goddess = goddessGroups.find(group => state.currentIndex < group[0]);
  const image = document.querySelector("#deity-phase-image");
  image.alt = `${goddess[1]} – mėnulio fazės aprašymas`;
  image.onerror = () => {
    image.onerror = null;
    image.src = fallbackImage(goddess[1]);
  };
  image.src = goddess[2];

  document.querySelector("#open-today").addEventListener("click", () => openDay(state.currentIndex));

  const requestedDay = Number(location.hash.match(/^#diena-(\d{1,2})$/)?.[1]);
  if (requestedDay >= 1 && requestedDay <= days.length) openDay(requestedDay - 1, false);
}

try {
  renderCalendar();
} catch (error) {
  console.error(error);
  document.querySelector("#phase-name").textContent = "Mėnulio skaičiavimas laikinai nepasiekiamas";
  document.querySelector("#open-today").disabled = true;
}
