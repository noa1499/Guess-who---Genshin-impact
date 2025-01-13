function clearAllCharacters() {
    const characters = document.querySelectorAll('.character');
    characters.forEach(character => {
        character.remove();
    });
    updateMenuItems();
}

const characters = {
    all: [
        { name: "Aether", image: "characters/Aether.png" },
        { name: "Albedo", image: "characters/Albedo.png" },
        { name: "Alhaitham", image: "characters/Alhaitham.png" },
        { name: "Aloy", image: "characters/Aloy.png" },
        { name: "Amber", image: "characters/Amber.png" },
        { name: "Arlecchino", image: "characters/Arlecchino.png" },
        { name: "Ayaka", image: "characters/Ayaka.png" },
        { name: "Ayato", image: "characters/Ayato.png" },
        { name: "Baizhu", image: "characters/Baizhu.png" },
        { name: "Barbara", image: "characters/Barbara.png" },
        { name: "Beidou", image: "characters/Beidou.png" },
        { name: "Bennett", image: "characters/Bennett.png" },
        { name: "Candace", image: "characters/Candace.png" },
        { name: "Charlotte", image: "characters/Charlotte.png" },
        { name: "Chasca", image: "characters/Chasca.png" },
        { name: "Chevreuse", image: "characters/Chevreuse.png" },
        { name: "Childe", image: "characters/Childe.png" },
        { name: "Chiori", image: "characters/Chiori.png" },
        { name: "Chongyun", image: "characters/Chongyun.png" },
        { name: "Citlali", image: "characters/Citlali.png" },
        { name: "Clorinde", image: "characters/Clorinde.png" },
        { name: "Collei", image: "characters/Collei.png" },
        { name: "Cyno", image: "characters/Cyno.png" },
        { name: "Dehya", image: "characters/Dehya.png" },
        { name: "Diluc", image: "characters/Diluc.png" },
        { name: "Diona", image: "characters/Diona.png" },
        { name: "Dori", image: "characters/Dori.png" },
        { name: "Emilie", image: "characters/Emilie.png" },
        { name: "Eula", image: "characters/Eula.png" },
        { name: "Faruzan", image: "characters/Faruzan.png" },
        { name: "Fischl", image: "characters/Fischl.png" },
        { name: "Freminet", image: "characters/Freminet.png" },
        { name: "Furina", image: "characters/Furina.png" },
        { name: "Gaming", image: "characters/Gaming.png" },
        { name: "Ganyu", image: "characters/Ganyu.png" },
        { name: "Gorou", image: "characters/Gorou.png" },
        { name: "Heizou", image: "characters/Heizou.png" },
        { name: "Hu Tao", image: "characters/Hu Tao.png" },
        { name: "Itto", image: "characters/Itto.png" },
        { name: "Jean", image: "characters/Jean.png" },
        { name: "Kachina", image: "characters/Kachina.png" },
        { name: "Kaeya", image: "characters/Kaeya.png" },
        { name: "Kaveh", image: "characters/Kaveh.png" },
        { name: "Kazuha", image: "characters/Kazuha.png" },
        { name: "Keqing", image: "characters/Keqing.png" },
        { name: "Kinich", image: "characters/Kinich.png" },
        { name: "Kirara", image: "characters/Kirara.png" },
        { name: "Klee", image: "characters/Klee.png" },
        { name: "Kokomi", image: "characters/Kokomi.png" },
        { name: "Kujou Sara", image: "characters/Kujou Sara.png" },
        { name: "Kuki Shinobu", image: "characters/Kuki Shinobu.png" },
        { name: "Layla", image: "characters/Layla.png" },
        { name: "Lisa", image: "characters/Lisa.png" },
        { name: "Lumine", image: "characters/Lumine.png" },
        { name: "Lynette", image: "characters/Lynette.png" },
        { name: "Lyney", image: "characters/Lyney.png" },
        { name: "Mavuika", image: "characters/Mavuika.png" },
        { name: "Mika", image: "characters/Mika.png" },
        { name: "Mona", image: "characters/Mona.png" },
        { name: "Mualani", image: "characters/Mualani.png" },
        { name: "Nahida", image: "characters/Nahida.png" },
        { name: "Navia", image: "characters/Navia.png" },
        { name: "Neuvillette", image: "characters/Neuvillette.png" },
        { name: "Nilou", image: "characters/Nilou.png" },
        { name: "Ningguang", image: "characters/Ningguang.png" },
        { name: "Noelle", image: "characters/Noelle.png" },
        { name: "Ororon", image: "characters/Ororon.png" },
        { name: "Qiqi", image: "characters/Qiqi.png" },
        { name: "Raiden", image: "characters/Raiden.png" },
        { name: "Razor", image: "characters/Razor.png" },
        { name: "Rosaria", image: "characters/Rosaria.png" },
        { name: "Sayu", image: "characters/Sayu.png" },
        { name: "Sethos", image: "characters/Sethos.png" },
        { name: "Shenhe", image: "characters/Shenhe.png" },
        { name: "Sigewinne", image: "characters/Sigewinne.png" },
        { name: "Sucrose", image: "characters/Sucrose.png" },
        { name: "Thoma", image: "characters/Thoma.png" },
        { name: "Tighnari", image: "characters/Tighnari.png" },
        { name: "Venti", image: "characters/Venti.png" },
        { name: "Wanderer", image: "characters/Wanderer.png" },
        { name: "Wriothesley", image: "characters/Wriothesley.png" },
        { name: "Xiangling", image: "characters/Xiangling.png" },
        { name: "Xianyun", image: "characters/Xianyun.png" },
        { name: "Xiao", image: "characters/Xiao.png" },
        { name: "Xilonen", image: "characters/Xilonen.png" },
        { name: "Xingqiu", image: "characters/Xingqiu.png" },
        { name: "Xinyan", image: "characters/Xinyan.png" },
        { name: "Yae Miko", image: "characters/Yae Miko.png" },
        { name: "Yanfei", image: "characters/Yanfei.png" },
        { name: "Yaoyao", image: "characters/Yaoyao.png" },
        { name: "Yelan", image: "characters/Yelan.png" },
        { name: "Yoimiya", image: "characters/Yoimiya.png" },
        { name: "Yun Jin", image: "characters/Yun Jin.png" },
        { name: "Zhongli", image: "characters/Zhongli.png" },
        // További karakterek
    ],
    regions: {
        mondstadt: [
            { name: "Albedo", image: "characters/Albedo.png" },
            { name: "Amber", image: "characters/Amber.png" },
            { name: "Barbara", image: "characters/Barbara.png" },
            { name: "Bennett", image: "characters/Bennett.png" },
            { name: "Diluc", image: "characters/Diluc.png" },
            { name: "Diona", image: "characters/Diona.png" },
            { name: "Eula", image: "characters/Eula.png" },
            { name: "Fischl", image: "characters/Fischl.png" },
            { name: "Jean", image: "characters/Jean.png" },
            { name: "Kaeya", image: "characters/Kaeya.png" },
            { name: "Klee", image: "characters/Klee.png" },
            { name: "Lisa", image: "characters/Lisa.png" },
            { name: "Mika", image: "characters/Mika.png" },
            { name: "Mona", image: "characters/Mona.png" },
            { name: "Noelle", image: "characters/Noelle.png" },
            { name: "Qiqi", image: "characters/Qiqi.png" },
            { name: "Razor", image: "characters/Razor.png" },
            { name: "Rosaria", image: "characters/Rosaria.png" },
            { name: "Sucrose", image: "characters/Sucrose.png" },
            { name: "Venti", image: "characters/Venti.png" },
            // További Mondstadt karakterek
        ],
        liyue: [
            { name: "Baizhu", image: "characters/Baizhu.png" },
            { name: "Beidou", image: "characters/Beidou.png" },
            { name: "Childe", image: "characters/Childe.png" },
            { name: "Chongyun", image: "characters/Chongyun.png" },
            { name: "Gaming", image: "characters/Gaming.png" },
            { name: "Ganyu", image: "characters/Ganyu.png" },
            { name: "Hu Tao", image: "characters/Hu Tao.png" },
            { name: "Keqing", image: "characters/Keqing.png" },
            { name: "Ningguang", image: "characters/Ningguang.png" },
            { name: "Shenhe", image: "characters/Shenhe.png" },
            { name: "Xiangling", image: "characters/Xangling.png" },
            { name: "Xianyun", image: "characters/Xianyun.png" },
            { name: "Xiao", image: "characters/Xiao.png" },
            { name: "Xingqiu", image: "characters/Xingqiu.png" },
            { name: "Xinyan", image: "characters/Xinyan.png" },
            { name: "Yanfei", image: "characters/Yanfei.png" },
            { name: "Yaoyao", image: "characters/Yaoyao.png" },
            { name: "Yelan", image: "characters/Yelan.png" },
            { name: "Yun Jin", image: "characters/Yun Jin.png" },
            { name: "Zhongli", image: "characters/Zhongli.png" },
            // További Liyue karakterek
        ],
        inazuma: [
            { name: "Ayaka", image: "characters/Ayaka.png" },
            { name: "Ayato", image: "characters/Ayato.png" },
            { name: "Chiori", image: "characters/Chiori.png" },
            { name: "Gorou", image: "characters/Gorou.png" },
            { name: "Heizou", image: "characters/Heizou.png" },
            { name: "Itto", image: "characters/Itto.png" },
            { name: "Kazuha", image: "characters/Kazuha.png" },
            { name: "Kirara", image: "characters/Kirara.png" },
            { name: "Kokomi", image: "characters/Kokomi.png" },
            { name: "Kujou Sara", image: "characters/Kujou Sara.png" },
            { name: "Kuki Shinobu", image: "characters/Kuki Shinobu.png" },
            { name: "Raiden", image: "characters/Raiden.png" },
            { name: "Sayu", image: "characters/Sayu.png" },
            { name: "Thoma", image: "characters/Thoma.png" },
            { name: "Yae Miko", image: "characters/Yae Miko.png" },
            { name: "Yoimiya", image: "characters/Yoimiya.png" },
            // További Inazuma karakterek
        ],
        sumeru: [
            { name: "Alhaitham", image: "characters/Alhaitham.png" },
            { name: "Candace", image: "characters/Candace.png" },
            { name: "Collei", image: "characters/Collei.png" },
            { name: "Cyno", image: "characters/Cyno.png" },
            { name: "Dehya", image: "characters/Dehya.png" },
            { name: "Dori", image: "characters/Dori.png" },
            { name: "Faruzan", image: "characters/Faruzan.png" },
            { name: "Kaveh", image: "characters/Kaveh.png" },
            { name: "Layla", image: "characters/Layla.png" },
            { name: "Nahida", image: "characters/Nahida.png" },
            { name: "Nilou", image: "characters/Nilou.png" },
            { name: "Sethos", image: "characters/Sethos.png" },
            { name: "Tighnari", image: "characters/Tighnari.png" },
            { name: "Wanderer", image: "characters/Wanderer.png" },
            // További Sumeru karakterek
        ],
        fontaine: [
            { name: "Arlecchino", image: "characters/Arlecchino.png" },
            { name: "Charlotte", image: "characters/Charlotte.png" },
            { name: "Chevreuse", image: "characters/Chevreuse.png" },
            { name: "Clorinde", image: "characters/Clorinde.png" },
            { name: "Emilie", image: "characters/Emilie.png" },
            { name: "Freminet", image: "characters/Freminet.png" },
            { name: "Furina", image: "characters/Furina.png" },
            { name: "Lynette", image: "characters/Lynette.png" },
            { name: "Lyney", image: "characters/Lyney.png" },
            { name: "Navia", image: "characters/Navia.png" },
            { name: "Neuvillette", image: "characters/Neuvillette.png" },
            { name: "Sigewinne", image: "characters/Sigewinne.png" },
            { name: "Wriothesley", image: "characters/Wriothesley.png" },
            // További Fontaine karakterek
        ],
        natlan: [
            { name: "Chasca", image: "characters/Chasca.png" },
            { name: "Citlali", image: "characters/Citlali.png" },
            { name: "Kachina", image: "characters/Kachina.png" },
            { name: "Kinich", image: "characters/Kinich.png" },
            { name: "Mavuika", image: "characters/Mavuika.png" },
            { name: "Mualani", image: "characters/Mualani.png" },
            { name: "Ororon", image: "characters/Ororon.png" },
            { name: "Xilonen", image: "characters/Xilonen.png" },
            // További Natlan karakterek
        ],
        other: [
            { name: "Aether", image: "characters/Aether.png" },
            { name: "Aloy", image: "characters/Aloy.png" },
            { name: "Lumine", image: "characters/Lumine.png" },
            // További egyéb karakterek
        ],
    },
    visions: {
        anemo: [
            { name: "Aether", image: "characters/Aether.png" },
            { name: "Chasca", image: "characters/Chasca.png" },
            { name: "Faruzan", image: "characters/Faruzan.png" },
            { name: "Heizou", image: "characters/Heizou.png" },
            { name: "Jean", image: "characters/Jean.png" },
            { name: "Kazuha", image: "characters/Kazuha.png" },
            { name: "Lumine", image: "characters/Lumine.png" },
            { name: "Lynette", image: "characters/Lynette.png" },
            { name: "Sayu", image: "characters/Sayu.png" },
            { name: "Sucrose", image: "characters/Sucrose.png" },
            { name: "Venti", image: "characters/Venti.png" },
            { name: "Wanderer", image: "characters/Wanderer.png" },
            { name: "Xianyun", image: "characters/Xianyun.png" },
            { name: "Xiao", image: "characters/Xiao.png" },
            // Add more Anemo characters
        ],
        geo: [
            { name: "Aether", image: "characters/Aether.png" },
            { name: "Albedo", image: "characters/Albedo.png" },
            { name: "Chiori", image: "characters/Chiori.png" },
            { name: "Gorou", image: "characters/Gorou.png" },
            { name: "Itto", image: "characters/Itto.png" },
            { name: "Kachina", image: "characters/Kachina.png" },
            { name: "Lumine", image: "characters/Lumine.png" },
            { name: "Navia", image: "characters/Navia.png" },
            { name: "Ningguang", image: "characters/Ningguang.png" },
            { name: "Noelle", image: "characters/Noelle.png" },
            { name: "Xilonen", image: "characters/Xilonen.png" },
            { name: "Yun Jin", image: "characters/Yun Jin.png" },
            { name: "Zhongli", image: "characters/Zhongli.png" },
            // Add more Geo characters
        ],
        electro: [
            { name: "Aether", image: "characters/Aether.png" },
            { name: "Beidou", image: "characters/Beidou.png" },
            { name: "Clorinde", image: "characters/Clorinde.png" },
            { name: "Cyno", image: "characters/Cyno.png" },
            { name: "Dori", image: "characters/Dori.png" },
            { name: "Fischl", image: "characters/Fischl.png" },
            { name: "Keqing", image: "characters/Keqing.png" },
            { name: "Kujou Sara", image: "characters/Kujou Sara.png" },
            { name: "Kuki Shinobu", image: "characters/Kuki Shinobu.png" },
            { name: "Lisa", image: "characters/Lisa.png" },
            { name: "Lumine", image: "characters/Lumine.png" },
            { name: "Ororon", image: "characters/Ororon.png" },
            { name: "Raiden", image: "characters/Raiden.png" },
            { name: "Razor", image: "characters/Razor.png" },
            { name: "Sethos", image: "characters/Sethos.png" },
            { name: "Yae Miko", image: "characters/Yae Miko.png" },
            // Add more Electro characters
        ],
        dendro: [
            { name: "Aether", image: "characters/Aether.png" },
            { name: "Alhaitham", image: "characters/Alhaitham.png" },
            { name: "Baizhu", image: "characters/Baizhu.png" },
            { name: "Collei", image: "characters/Collei.png" },
            { name: "Emilie", image: "characters/Emilie.png" },
            { name: "Kaveh", image: "characters/Kaveh.png" },
            { name: "Kinich", image: "characters/Kinich.png" },
            { name: "Kirara", image: "characters/Kirara.png" },
            { name: "Lumine", image: "characters/Lumine.png" },
            { name: "Nahida", image: "characters/Nahida.png" },
            { name: "Tighnari", image: "characters/Tighnari.png" },
            { name: "Yaoyao", image: "characters/Yaoyao.png" },
            // Add more Dendro characters
        ],
        hydro: [
            { name: "Aether", image: "characters/Aether.png" },
            { name: "Ayato", image: "characters/Ayato.png" },
            { name: "Barbara", image: "characters/Barbara.png" },
            { name: "Candace", image: "characters/Candace.png" },
            { name: "Childe", image: "characters/Childe.png" },
            { name: "Furina", image: "characters/Furina.png" },
            { name: "Kokomi", image: "characters/Kokomi.png" },
            { name: "Lumine", image: "characters/Lumine.png" },
            { name: "Mona", image: "characters/Mona.png" },
            { name: "Mualani", image: "characters/Mualani.png" },
            { name: "Neuvillette", image: "characters/Neuvillette.png" },
            { name: "Nilou", image: "characters/Nilou.png" },
            { name: "Sigewinne", image: "characters/Sigewinne.png" },
            { name: "Xingqiu", image: "characters/Xingqiu.png" },
            { name: "Yelan", image: "characters/Yelan.png" },
            // Add more Hydro characters
        ],
        pyro: [
            { name: "Aether", image: "characters/Aether.png" },
            { name: "Amber", image: "characters/Amber.png" },
            { name: "Arlecchino", image: "characters/Arlecchino.png" },
            { name: "Bennett", image: "characters/Bennett.png" },
            { name: "Chevreuse", image: "characters/Chevreuse.png" },
            { name: "Dehya", image: "characters/Dehya.png" },
            { name: "Diluc", image: "characters/Diluc.png" },
            { name: "Gaming", image: "characters/Gaming.png" },
            { name: "Hu Tao", image: "characters/Hu Tao.png" },
            { name: "Klee", image: "characters/Klee.png" },
            { name: "Lumine", image: "characters/Lumine.png" },
            { name: "Lyney", image: "characters/Lyney.png" },
            { name: "Mavuika", image: "characters/Mavuika.png" },
            { name: "Thoma", image: "characters/Thoma.png" },
            { name: "Xiangling", image: "characters/Xiangling.png" },
            { name: "Xinyan", image: "characters/Xinyan.png" },
            { name: "Yanfei", image: "characters/Yanfei.png" },
            { name: "Yoimiya", image: "characters/Yoimiya.png" },
            // Add more Pyro characters
        ],
        cryo: [
            { name: "Aloy", image: "characters/Aloy.png" },
            { name: "Ayaka", image: "characters/Ayaka.png" },
            { name: "Charlotte", image: "characters/Charlotte.png" },
            { name: "Chongyun", image: "characters/Chongyun.png" },
            { name: "Citlali", image: "characters/Citlali.png" },
            { name: "Diona", image: "characters/Diona.png" },
            { name: "Eula", image: "characters/Eula.png" },
            { name: "Freminet", image: "characters/Freminet.png" },
            { name: "Ganyu", image: "characters/Ganyu.png" },
            { name: "Kaeya", image: "characters/Kaeya.png" },
            { name: "Layla", image: "characters/Layla.png" },
            { name: "Mika", image: "characters/Mika.png" },
            { name: "Qiqi", image: "characters/Qiqi.png" },
            { name: "Razor", image: "characters/Razor.png" },
            { name: "Rosaria", image: "characters/Rosaria.png" },
            { name: "Shenhe", image: "characters/Shenhe.png" },
            { name: "Wriothesley", image: "characters/Wriothesley.png" },
            // Add more Cryo characters
        ],
        
    },
    weapons: {
        sword: [
            { name: "Aether", image: "characters/Aether.png" },
            { name: "Albedo", image: "characters/Albedo.png" },
            { name: "Alhaitham", image: "characters/Alhaitham.png" },
            { name: "Ayaka", image: "characters/Ayaka.png" },
            { name: "Ayato", image: "characters/Ayato.png" },
            { name: "Bennett", image: "characters/Bennett.png" },
            { name: "Chiori", image: "characters/Chiori.png" },
            { name: "Clorinde", image: "characters/Clorinde.png" },
            { name: "Furina", image: "characters/Furina.png" },
            { name: "Jean", image: "characters/Jean.png" },
            { name: "Kaeya", image: "characters/Kaeya.png" },
            { name: "Kazuha", image: "characters/Kazuha.png" },
            { name: "Keqing", image: "characters/Keqing.png" },
            { name: "Kirara", image: "characters/Kirara.png" },
            { name: "Kuki Shinobu", image: "characters/Kuki Shinobu.png" },
            { name: "Layla", image: "characters/Layla.png" },
            { name: "Lumine", image: "characters/Lumine.png" },
            { name: "Lynette", image: "characters/Lynette.png" },
            { name: "Nilou", image: "characters/Nilou.png" },
            { name: "Qiqi", image: "characters/Qiqi.png" },
            { name: "Xilonen", image: "characters/Xilonen.png" },
            { name: "Xingqiu", image: "characters/Xingqiu.png" },
            // Add more sword weapons
        ],
        claymore: [
            { name: "Beidou", image: "characters/Beidou.png" },
            { name: "Chongyun", image: "characters/Chongyun.png" },
            { name: "Dehya", image: "characters/Dehya.png" },
            { name: "Diluc", image: "characters/Diluc.png" },
            { name: "Dori", image: "characters/Dori.png" },
            { name: "Eula", image: "characters/Eula.png" },
            { name: "Freminet", image: "characters/Freminet.png" },
            { name: "Gaming", image: "characters/Gaming.png" },
            { name: "Itto", image: "characters/Itto.png" },
            { name: "Kaveh", image: "characters/Kaveh.png" },
            { name: "Kinich", image: "characters/Kinich.png" },
            { name: "Mavuika", image: "characters/Mavuika.png" },
            { name: "Navia", image: "characters/Navia.png" },
            { name: "Noelle", image: "characters/Noelle.png" },
            { name: "Razor", image: "characters/Razor.png" },
            { name: "Sayu", image: "characters/Sayu.png" },
            { name: "Xinyan", image: "characters/Xinyan.png" },
            // Add more claymore weapons
        ],
        polearm: [
            { name: "Arlecchino", image: "characters/Arlecchino.png" },
            { name: "Candace", image: "characters/Candace.png" },
            { name: "Chevreuse", image: "characters/Chevreuse.png" },
            { name: "Cyno", image: "characters/Cyno.png" },
            { name: "Emilie", image: "characters/Emilie.png" },
            { name: "Hu Tao", image: "characters/Hu Tao.png" },
            { name: "Kachina", image: "characters/Kachina.png" },
            { name: "Mika", image: "characters/Mika.png" },
            { name: "Raiden", image: "characters/Raiden.png" },
            { name: "Rosaria", image: "characters/Rosaria.png" },
            { name: "Shenhe", image: "characters/Shenhe.png" },
            { name: "Thoma", image: "characters/Thoma.png" },
            { name: "Xiangling", image: "characters/Xiangling.png" },
            { name: "Xiao", image: "characters/Xiao.png" },
            { name: "Yaoyao", image: "characters/Yaoyao.png" },
            { name: "Yun Jin", image: "characters/Yun Jin.png" },
            { name: "Zhongli", image: "characters/Zhongli.png" },
            // Add more polearm weapons
        ],
        bow: [
            { name: "Aloy", image: "characters/Aloy.png" },
            { name: "Amber", image: "characters/Amber.png" },
            { name: "Chasca", image: "characters/Chasca.png" },
            { name: "Childe", image: "characters/Childe.png" },
            { name: "Collei", image: "characters/Collei.png" },
            { name: "Diona", image: "characters/Diona.png" },
            { name: "Faruzan", image: "characters/Faruzan.png" },
            { name: "Fischl", image: "characters/Fischl.png" },
            { name: "Ganyu", image: "characters/Ganyu.png" },
            { name: "Gorou", image: "characters/Gorou.png" },
            { name: "Kujou Sara", image: "characters/Kujou Sara.png" },
            { name: "Lyney", image: "characters/Lyney.png" },
            { name: "Ororon", image: "characters/Ororon.png" },
            { name: "Sethos", image: "characters/Sethos.png" },
            { name: "Sigewinne", image: "characters/Sigewinne.png" },
            { name: "Tighnari", image: "characters/Tighnari.png" },
            { name: "Venti", image: "characters/Venti.png" },
            { name: "Yelan", image: "characters/Yelan.png" },
            { name: "Yoimiya", image: "characters/Yoimiya.png" },
            // Add more bow weapons
        ],
        catalyst: [
            { name: "Baizhu", image: "characters/Baizhu.png" },
            { name: "Barbara", image: "characters/Barbara.png" },
            { name: "Charlotte", image: "characters/Charlotte.png" },
            { name: "Citlali", image: "characters/Citlali.png" },
            { name: "Heizou", image: "characters/Heizou.png" },
            { name: "Klee", image: "characters/Klee.png" },
            { name: "Kokomi", image: "characters/Kokomi.png" },
            { name: "Lisa", image: "characters/Lisa.png" },
            { name: "Mona", image: "characters/Mona.png" },
            { name: "Mualani", image: "characters/Mualani.png" },
            { name: "Neuvillette", image: "characters/Neuvillette.png" },
            { name: "Ningguang", image: "characters/Ningguang.png" },
            { name: "Sucrose", image: "characters/Sucrose.png" },
            { name: "Wanderer", image: "characters/Wanderer.png" },
            { name: "Wriothesley", image: "characters/Wriothesley.png" },
            { name: "Xianyun", image: "characters/Xianyun.png" },
            { name: "Yae Miko", image: "characters/Yae Miko.png" },
            { name: "Yanfei", image: "characters/Yanfei.png" },
            // Add more catalyst weapons
        ],
    },
    stars: {
        four: [
            { name: "Amber", image: "characters/Amber.png" },
            { name: "Barbara", image: "characters/Barbara.png" },
            { name: "Beidou", image: "characters/Beidou.png" },
            { name: "Bennett", image: "characters/Bennett.png" },
            { name: "Candace", image: "characters/Candace.png" },
            { name: "Charlotte", image: "characters/Charlotte.png" },
            { name: "Chevreuse", image: "characters/Chevreuse.png" },
            { name: "Chongyun", image: "characters/Chongyun.png" },
            { name: "Collei", image: "characters/Collei.png" },
            { name: "Diona", image: "characters/Diona.png" },
            { name: "Dori", image: "characters/Dori.png" },
            { name: "Faruzan", image: "characters/Faruzan.png" },
            { name: "Fischl", image: "characters/Fischl.png" },
            { name: "Freminet", image: "characters/Freminet.png" },
            { name: "Gaming", image: "characters/Gaming.png" },
            { name: "Gorou", image: "characters/Gorou.png" },
            { name: "Heizou", image: "characters/Heizou.png" },
            { name: "Kachina", image: "characters/Kachina.png" },
            { name: "Kaeya", image: "characters/Kaeya.png" },
            { name: "Kaveh", image: "characters/Kaveh.png" },
            { name: "Kirara", image: "characters/Kirara.png" },
            { name: "Kujou Sara", image: "characters/Kujou Sara.png" },
            { name: "Kuki Shinobu", image: "characters/Kuki Shinobu.png" },
            { name: "Layla", image: "characters/Layla.png" },
            { name: "Lisa", image: "characters/Lisa.png" },
            { name: "Lynette", image: "characters/Lynette.png" },
            { name: "Mika", image: "characters/Mika.png" },
            { name: "Ningguang", image: "characters/Ningguang.png" },
            { name: "Noelle", image: "characters/Noelle.png" },
            { name: "Ororon", image: "characters/Ororon.png" },
            { name: "Razor", image: "characters/Razor.png" },
            { name: "Rosaria", image: "characters/Rosaria.png" },
            { name: "Sayu", image: "characters/Sayu.png" },
            { name: "Sethos", image: "characters/Sethos.png" },
            { name: "Sucrose", image: "characters/Sucrose.png"},
            { name: "Thoma", image: "characters/Thoma.png" },
            { name: "Xiangling", image: "characters/Xiangling.png" },
            { name: "Xingqiu", image: "characters/Xingqiu.png" },
            { name: "Xinyan", image: "characters/Xinyan.png" },
            { name: "Yanfei", image: "characters/Yanfei.png" },
            { name: "Yaoyao", image: "characters/Yaoyao.png" },
            { name: "Yun Jin", image: "characters/Yun Jin.png" },
            // Add more 4-star characters
        ],
        five: [
            { name: "Aether", image: "characters/Aether.png" },
            { name: "Albedo", image: "characters/Albedo.png" },
            { name: "Alhaitham", image: "characters/Alhaitham.png" },
            { name: "Aloy", image: "characters/Aloy.png" },
            { name: "Arlecchino", image: "characters/Arlecchino.png" },
            { name: "Ayaka", image: "characters/Ayaka.png" },
            { name: "Ayato", image: "characters/Ayato.png" },
            { name: "Baizhu", image: "characters/Baizhu.png" },
            { name: "Chasca", image: "characters/Chasca.png" },
            { name: "Chiori", image: "characters/Chiori.png" },
            { name: "Childe", image: "characters/Childe.png" },
            { name: "Citlali", image: "characters/Citlali.png" },
            { name: "Clorinde", image: "characters/Clorinde.png" },
            { name: "Cyno", image: "characters/Cyno.png" },
            { name: "Dehya", image: "characters/Dehya.png" },
            { name: "Diluc", image: "characters/Diluc.png" },
            { name: "Emilie", image: "characters/Emilie.png" },
            { name: "Eula", image: "characters/Eula.png" },
            { name: "Furina", image: "characters/Furina.png" },
            { name: "Ganyu", image: "characters/Ganyu.png" },
            { name: "Hu Tao", image: "characters/Hu Tao.png" },
            { name: "Itto", image: "characters/Itto.png" },
            { name: "Jean", image: "characters/Jean.png" },
            { name: "Kazuha", image: "characters/Kazuha.png" },
            { name: "Keqing", image: "characters/Keqing.png" },
            { name: "Kinich", image: "characters/Kinich.png" },
            { name: "Klee", image: "characters/Klee.png" },
            { name: "Kokomi", image: "characters/Kokomi.png" },
            { name: "Lumine", image: "characters/Lumine.png" },
            { name: "Lyney", image: "characters/Lyney.png" },
            { name: "Mavuika", image: "characters/Mavuika.png" },
            { name: "Mona", image: "characters/Mona.png" },
            { name: "Mualani", image: "characters/Mualani.png" },
            { name: "Nahida", image: "characters/Nahida.png" },
            { name: "Navia", image: "characters/Navia.png" },
            { name: "Neuvillette", image: "characters/Neuvillette.png" },
            { name: "Nilou", image: "characters/Nilou.png" },
            { name: "Qiqi", image: "characters/Qiqi.png" },
            { name: "Raiden", image: "characters/Raiden.png" },
            { name: "Shenhe", image: "characters/Shenhe.png" },
            { name: "Sigewinne", image: "characters/Sigewinne.png" },
            { name: "Tighnari", image: "characters/Tighnari.png" },
            { name: "Venti", image: "characters/Venti.png" },
            { name: "Wanderer", image: "characters/Wanderer.png" },
            { name: "Wriothesley", image: "characters/Wriothesley.png" },
            { name: "Xianyun", image: "characters/Xianyun.png" },
            { name: "Xiao", image: "characters/Xiao.png" },
            { name: "Xilonen", image: "characters/Xilonen.png" },
            { name: "Yae Miko", image: "characters/Yae Miko.png" },
            { name: "Yelan", image: "characters/Yelan.png" },
            { name: "Yoimiya", image: "characters/Yoimiya.png" },
            { name: "Zhongli", image: "characters/Zhongli.png" },
            // Add more 5-star characters
        ],
    }
};

function resetCharacters() {
    const characters = document.querySelectorAll('.character');
    characters.forEach(character => {
        character.classList.remove('out');
        character.classList.add('visible');
    });
}

function addAllCharacters(menuId) {
    let characterList;
    
    if (menuId === 'all') {
        characterList = characters.all;
    } else if (menuId === 'regions') {
        characterList = Object.values(characters.regions).flat();
    } else if (menuId === 'visions') {
        characterList = Object.values(characters.visions).flat();
    } else if (['mondstadt', 'liyue', 'inazuma', 'sumeru', 'fontaine', 'natlan'].includes(menuId)) {
        characterList = characters.regions[menuId];
    } else if (['anemo', 'geo', 'electro', 'dendro', 'hydro', 'pyro', 'cryo'].includes(menuId)) {
        characterList = characters.visions[menuId];
    } else if (['sword', 'claymore', 'polearm', 'bow', 'catalyst'].includes(menuId)) {
        characterList = characters.weapons[menuId];
    } else if (['four', 'five'].includes(menuId)) {
        characterList = characters.stars[menuId];
    } else {
        console.error("Invalid menuId:", menuId);
        return;
    }

    const allSelected = characterList.every(character => 
        document.getElementById(character.name)
    );

    characterList.forEach(character => {
        const characterDiv = document.getElementById(character.name);
        if (allSelected && characterDiv) {
            characterDiv.remove();
        } else if (!allSelected && !characterDiv) {
            toggleCharacter(character.name);
        }
    });

    updateMenuItems();
}

function toggleMenu() {
    const menu = document.getElementById('menu-items');
    const subMenus = document.querySelectorAll('.sub-menu');
    
    if (menu.style.display === 'block') {
        menu.style.display = 'none';
        subMenus.forEach(subMenu => {
            subMenu.style.display = 'none';
        });
    } else {
        menu.style.display = 'block';
    }
}

function toggleSubMenu(menuId) {
    const subMenu = document.getElementById(menuId);
    console.log(`Toggling submenu: ${menuId}`); // Konzol üzenet hozzáadása
    subMenu.style.display = subMenu.style.display === 'block' ? 'none' : 'block';
    if (subMenu.style.display === 'block') {
        populateSubMenu(menuId);
    }
}

function populateSubMenu(menuId) {
    const subMenu = document.getElementById(menuId);
    subMenu.innerHTML = '';
    console.log(`Populating submenu: ${menuId}`); // Konzol üzenet hozzáadása

    let categoryCharacters;
    if (menuId === 'all') {
        categoryCharacters = characters.all;
    } else if (['mondstadt', 'liyue', 'inazuma', 'sumeru', 'fontaine', 'natlan'].includes(menuId)) {
        categoryCharacters = characters.regions[menuId];
    } else if (['anemo', 'geo', 'electro', 'dendro', 'hydro', 'pyro', 'cryo'].includes(menuId)) {
        categoryCharacters = characters.visions[menuId];
    } else if (['sword', 'claymore', 'polearm', 'bow', 'catalyst'].includes(menuId)) {
        categoryCharacters = characters.weapons[menuId];
    } else if (['four', 'five'].includes(menuId)) {
        categoryCharacters = characters.stars[menuId];
    }

    if (categoryCharacters) {
        const allButton = document.createElement('li');
        allButton.classList.add('all-button');
        allButton.textContent = 'All';
        allButton.onclick = () => addAllCharacters(menuId);
        subMenu.appendChild(allButton);

        categoryCharacters.forEach(character => {
            const listItem = document.createElement('li');
            listItem.textContent = character.name;
            listItem.onclick = () => toggleCharacter(character.name);
            subMenu.appendChild(listItem);
        });
    } else if (menuId === 'regions' || menuId === 'visions' || menuId === 'weapons' || menuId === 'stars') {
        const category = characters[menuId];
        for (const subCategory in category) {
            const categoryItem = document.createElement('li');
            categoryItem.textContent = subCategory.charAt(0).toUpperCase() + subCategory.slice(1);
            categoryItem.onclick = () => toggleSubMenu(subCategory);
            categoryItem.classList.add('region-header');
            subMenu.appendChild(categoryItem);

            const categorySubMenu = document.createElement('ul');
            categorySubMenu.id = subCategory;
            categorySubMenu.classList.add('sub-menu', 'region-submenu');
            subMenu.appendChild(categorySubMenu);
        }
    }

    updateMenuItems();
}

function toggleCharacter(characterName) {
    let character = null;
    for (const category in characters) {
        if (Array.isArray(characters[category])) {
            character = characters[category].find(c => c.name === characterName);
            if (character) break;
        } else if (typeof characters[category] === 'object') {
            for (const region in characters[category]) {
                character = characters[category][region].find(c => c.name === characterName);
                if (character) break;
            }
            if (character) break;
        }
    }

    if (!character) {
        console.error("Nem található karakter ezzel a névvel: " + characterName);
        return;
    }

    const board = document.getElementById('board');
    let characterDiv = document.getElementById(characterName);

    if (!characterDiv) {
        characterDiv = document.createElement('div');
        characterDiv.classList.add('character');
        characterDiv.id = characterName;
    
        const img = document.createElement('img');
        img.src = character.image;
        img.alt = character.name;
    
        const name = document.createElement('p');
        name.textContent = character.name;
    
        characterDiv.appendChild(img);
        characterDiv.appendChild(name);
        board.appendChild(characterDiv);
    
        characterDiv.classList.add('visible');
        characterDiv.onclick = () => toggleOutCharacter(characterName);
        
        characterDiv.addEventListener('contextmenu', (e) => {
            e.preventDefault();
            selectCharacter(characterName);
        });
    } else {
        characterDiv.remove();
    }

    updateMenuItems();
}

function toggleOutCharacter(characterName) {
    const characterDiv = document.getElementById(characterName);
    if (!characterDiv) return;
    characterDiv.classList.toggle('out');
}

function selectCharacter(characterName) {
    const selectedSpan = document.getElementById('selectedCharacter');
    selectedSpan.textContent = characterName;
}

function updateMenuItems() {
    const visibleCharacters = document.querySelectorAll('.character');
    const menuItems = document.querySelectorAll('#menu-items li');

    menuItems.forEach(item => {
        const characterName = item.textContent.trim();
        const isOnList = Array.from(visibleCharacters).some(character => 
            character.querySelector('p').textContent === characterName
        );

        if (isOnList) {
            item.classList.add('on-list');
        } else {
            item.classList.remove('on-list');
        }
    });
}

function openHelpPage() {
    window.open('help.html', '_blank');
}

document.addEventListener('click', function(event) {
    const menu = document.getElementById('menu-items');
    const hamburger = document.querySelector('.hamburger');
    
    if (!menu.contains(event.target) && event.target !== hamburger) {
        menu.style.display = 'none';
        const subMenus = document.querySelectorAll('.sub-menu');
        subMenus.forEach(subMenu => {
            subMenu.style.display = 'none';
        });
    }
});
