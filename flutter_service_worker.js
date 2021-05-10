'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  ".git/COMMIT_EDITMSG": "55fa359862d72031a6a46b47f3b7dfaf",
".git/config": "6e0a3edcd0547a1712583063ea0ca78f",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "1ea751b827d52294b0a1e64b8f50a728",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "ea587b0fae70333bce92257152996e70",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "82e0427a80cb00115015a6fb4123082e",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "c9dd1b0a8fd52ec5a8f5cf70c645c73f",
".git/logs/refs/heads/master": "b7d55f02f468dc35d07f73b630ceedf3",
".git/logs/refs/remotes/origin/master": "38b155756ab28d552a96aa735cf8c281",
".git/objects/03/10d1bee30d43923e65302b1456182f9649f25e": "cc72ba9061d5d056d4c62f394e994cb6",
".git/objects/03/94b9a479e1faeca78ea6fc6860038bb3c2c4b8": "21e9fb41361ee23fdb6e7e32dc9aaaf3",
".git/objects/09/47a3080a748a10bd4a98edb2274a5436e640de": "a8c47a1c882046fe2c33f152ac3e5293",
".git/objects/0a/524e9d68532686c61fd0d94014c74babbb4dcf": "ed55d1db4900f94ae948f095bbfd1009",
".git/objects/0a/fb6f0942fcdf707cff765d55b00a82e169670e": "51302ca8037e98bc012ce43aa6a71497",
".git/objects/0b/53e0cfd43d25cbeb1b47c6aafff645a6128220": "09c7e343316f0a9710a5c62929149ac0",
".git/objects/0c/9f56a28dca41ef2d62b2e661b63d357d49042d": "d639826a4cf1b241c03bb3456bc4b210",
".git/objects/11/4d4d0eeeef9fcc8ea7e8e17109d6e1a2544fb1": "6501bcca4f5282cc3fbd210603a19fbb",
".git/objects/14/210d796a654dfa100036e74ac1fd347c266429": "9a01a4be87e44dfc383ec3a0f9bc26d9",
".git/objects/17/40d2cf2de0548665407c9e529e2684fc35c40d": "5ff62630c55d0ccf52f7376cd00b450b",
".git/objects/19/fcaad47cdfc117fa11dd2bcc03d2d16a39fbbd": "5672fc0d7a24cf1d750984e9ce634aa7",
".git/objects/1b/4d1eedd2ac5453fb71e5fbd9dea68caea503b2": "6a37bc37e39f2c3812f62b17fa0e1123",
".git/objects/1b/bdfc42032f4d6cc151ec878a85e9e7af32bd86": "41e4c042a1326c810214fb26079b39c7",
".git/objects/1c/13a6c45d7bb1fd880d4d92480a3eb259e16d68": "b0fb79c19b5404c8903bb7a6d8d52acb",
".git/objects/1d/b2b636fd01ca2f2df615ff946546d5234110e4": "ea0cc2d8b330e071261f389536ff4706",
".git/objects/20/5bb5db271c6d8de8399864c7bb9b917f638893": "c993b22f115d7f3ae6d5b7b212806539",
".git/objects/22/93deae6c89b2c1d43fc04746b07bb258ef8575": "e2f5a45c61fca962b39fe84f8042cf96",
".git/objects/23/637bc3573701e2ad80a6f8be31b82926b4715f": "5f84f5c437bb2791fdc8411523eae8ff",
".git/objects/27/38fc1838d122cb1a0171942451f68f0433282e": "6ed664151346aec7487343f4c9670e9e",
".git/objects/2a/2ff9d3200ed0ae72d61e4d854bddf0c0192bb6": "6cf85e93d08283df89e03fbc4ac59606",
".git/objects/2b/0f654f059a1eb0717c721899eece4c97ed83e9": "2bf2a4bca3c543ec1099a7d77030fb84",
".git/objects/2c/0d73a1bc45ddc62ea56e13f953b9332427391d": "25efc97f998a8263c69b4557651919e9",
".git/objects/2e/86bd170da33ecd2ed707e4d6d96bd5532584de": "8a229fc652e914eed52e963e5b9e1f04",
".git/objects/2f/d3705c164e81df95e01e25b7f7abe85d102f6a": "2241ffefe30d3a2b0773b577de7550a4",
".git/objects/30/da28c1c41b3eda88f6a2d7327e13fed10c737d": "3172cdf07363a620ce436fa8ad14c949",
".git/objects/34/3180b9a3f90afd95353bd391ae179247d65407": "f74f5adfdb9e962a2327c65f9971b011",
".git/objects/3b/fff35c9acd99cb98bde351270f7eff2fb365a3": "d0aed354f0560f81d60c3d5a07ce550a",
".git/objects/3d/691aa28b26b07c5f3adf8b474d27c5babb57fc": "98bbcd0da89d5d7b8861ca37c21fa18a",
".git/objects/42/b841e595f3991f337902ebbda25ae89b88c57d": "f2285bfdca48801290463798e0ec20a3",
".git/objects/43/46e2d9e671bf7a5a3287a3ddacf5f915a35d4f": "41b3d0d418188d18de1ec7daf79f5299",
".git/objects/48/2eb2d01e746fb441240ca19db71a482b294175": "6c28c71bd555c46b7e9b850d5ca6bd8e",
".git/objects/49/133379e7f803c60e4360a97bb3b2fcc041475c": "baa6f01df91de3b5ac0ab28b72385653",
".git/objects/49/73edf38d2fcefc6750b5409d66f2ef6d33342e": "b77310215d30148dcfac80fbc1b380d7",
".git/objects/49/ea8f5ba9252776c0a9e0ab37d21700b42e3b2b": "bbb57ccd02bb514f5721367f05009c02",
".git/objects/4c/57a4c8755373a911bfc4296483ed3f137dca6a": "adb5cff767672600c9b821d24845bf97",
".git/objects/4f/1b5374b41043e02867c2d7c9fa8abd2beb24f0": "0e6885fb448c9389f91f23fd0a570ac0",
".git/objects/51/f4ae5404fc79be09e69171bfc9d34d48810297": "cbccb909471e4568310a97f46dd1e258",
".git/objects/53/45df7be6618c3473321cccaea1e035dada7662": "41fc6cb4ac09bfcf57b268ed2ba60eae",
".git/objects/57/62c4770cd34199ce89409729e3ca89dbafe582": "5f5f2d87d968d3e244e34020b54a1f5b",
".git/objects/59/32a3041b8a2eca71b9a54f8cd6ca2708983e69": "dbf01e702595dfd65bbd6015cfe3410c",
".git/objects/59/73dafd6a12d8e9316718f849adea9d352989dc": "5d42eddda62e4db636bf54050cb186a8",
".git/objects/5b/1f2ae2b7fe6a19d7a1fe35303009b4e0028f9c": "3545ab82fb02e4227572225c8f4e9e48",
".git/objects/5b/3238ba6edfe2bf2683eb687155d6e5a855ebe1": "b0052c807cda2debb952bf459d97b82f",
".git/objects/5c/7a2c1a28d5a5e640d97b33803a866320a7c553": "7484927d041e5d2e418d8257947a9b8a",
".git/objects/5e/60e119c5b39a33086f3f378dbf60a6b1fb7d1e": "75f9e3ce14d748897af4a4c851ca9925",
".git/objects/60/0116c9c2a12baffa533963c4248346ab453296": "c326ea1a82d6337b50ff725dde2fcd1d",
".git/objects/60/49eb5e5a9907a9121376707d9ed925149cfaf7": "66815f54b3a2ed0483022d7502214899",
".git/objects/63/ac9ee7b5739ac00dabdf825aea3756c0f2b9a7": "31fcfae05923e82825c76ae3288bf856",
".git/objects/66/f33b79f781a5512b636fd7ecc7bc2a9ad613c1": "eda0b2d4a6386055b66bcfc6cd2d4a08",
".git/objects/6a/c0025c5bffcf2438b998df552013bc6f4815e2": "c5038a53d0d8f3514fa4507a58fcaa47",
".git/objects/6b/03d6e28b225ab25ecb8c893e4c5bc180f7a2cf": "64dc414893d140838a368e3de1ff6e41",
".git/objects/6b/d57ec9716ab3860deac6c3a43595604d8a77b9": "bc89a5aab47421d1de80f437924ae144",
".git/objects/70/4008e53ec05eb6c7dc4a127079bf70d69dc13d": "6fb4a107f9302bd34432215c8f32b170",
".git/objects/70/c8173232b7e466c90fd58888dfad8040ca4773": "680647641b57360db7e2a83ebdea1ebf",
".git/objects/74/80845e6a68122c76f8ae1ecc8fb26bc9ec26f8": "45551ca52b78700f066d57fdce250fb3",
".git/objects/74/c5320e3503605b0f54be66775b3cf323dcd865": "06707f76b045d8246ad336c3e36a8b34",
".git/objects/75/c4f3d6033b007dfea86d70630fa283f8351b2a": "f90de498b20706766e6377aae0be71f3",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/7c/267a1cfd1b7604210f7ac48f005f92e8335b1c": "9d54771ab39457738a1361b151d36a93",
".git/objects/7e/5d44ae76ce5c46398ffdf0bfd95c19f48f476a": "05335cf6e0f6a8e1845b59132dc98ea1",
".git/objects/7f/2a34c9b7d8904978b63261da028e40e906efa2": "3be426eebfb0216fb92f56679bcb78f2",
".git/objects/81/552078da98efd57a30c71da73340ff5b2ad81f": "d8e9c069e1895bf26b6c7ce6f0e6b5e4",
".git/objects/81/eee82745d9b627d018e847e87437547690b899": "50726faae31488a8a31917232bddeed8",
".git/objects/82/333a7259118557b9b9a87b665ff1c72c2b46a6": "8351a4c93940a8a5b3847e0547874e09",
".git/objects/84/22e67937c42f2aa55c158093359374962f23ff": "b096b3a9f3896f56cd0f082731164e39",
".git/objects/85/08f61eb13b636d25d4cc4feea04509deda2a90": "f31a74124cf6b84f7f55e74706283c17",
".git/objects/85/e7d4357c9409866546e86d93e4c2aa5234d28a": "ae4c7476ff4d3bb2ed3a86af4e283680",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/91640feb6c2050f347fb468ae5bfe4ae51c318": "16077de552982a817cecef6eb4edc566",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8b/c27212f2c8148f74f8a0f4c0cbf758ae05f91d": "784e8da5fdeb2bba30a3f94305a843f8",
".git/objects/8c/8ab177edeb2509f68a008694ca9d2de91f9131": "d992f65f5a015ae3d348a56454cbe7c8",
".git/objects/8d/aa13a755345f09c65a36fc45108fa43d0996a9": "4559d3d721498978db91a223debb16b1",
".git/objects/91/d6b5443ed45bf2c55ada407e30028a6db04807": "27ee0a8c014be07e00ca17932664f1b6",
".git/objects/93/2df4ae2c3cb34a716e21b478590eecaa2ae295": "e299ba2e68d97d0f661cc8ddccf9787a",
".git/objects/93/3cc3d1aaab53770e9833f391aa20dc54668590": "4afe2be01096515b32f07ec72319e5b0",
".git/objects/9c/05d6b4a70d6fe758657a543c3bb4547e02d71a": "fc25e1e9900323f17e0babe50a97c8a7",
".git/objects/9d/86b58fd85459c5f92f37a1b0a4cd99975d8b57": "8c6431e0e124cacf63bedcc41ba116ce",
".git/objects/9e/b6486a61f6e59896641e287cf630979d5a7625": "ef5acbedb94ac5b078fd19b4e2707a92",
".git/objects/9f/3fb7500ac5cfb3b23b18145a177ed83127311c": "4190787ba48ad8b78661c8f9a24998ae",
".git/objects/9f/ca695f3edfa09d0a4d69e3fdf2a32edf5a3140": "8606092a5b5b740c30789cefa9b6e1b8",
".git/objects/a0/6852803a654adc3289eba18df468eec962a122": "876ba2a366918812821c118b8f574b9f",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/a3/d60ae5f378bc81039b3b1fbe7c42fda00d225f": "59b944b4bef1efc28a0ed3133deb72ba",
".git/objects/a4/53ea54764b84809d138acb0db2e15ad0a51b43": "e5e5d3719c73b68e09876948ce065299",
".git/objects/a5/596c3aef24603758a260c4358409ae01f870cc": "0f4ffb5c6c3fdda40de28e3378dde5b2",
".git/objects/a5/cbb7abb4f67d57782df28d800e8aa477c34d80": "1fc1846a9ba6f8b74e42b189fe341404",
".git/objects/a8/3a17d54b6dc2156c855c6580301cefc9c8d017": "6525101be8d70b808a809af9c83fa4ad",
".git/objects/aa/ccea9c446e30797b814d03bd8d709fd29a3edf": "e423df2f0f66df6bbb6d62b5d53a6feb",
".git/objects/ab/6c2d0e1ff6d821807481c92595f3638dc4361b": "9dee3daa397b4a5b07d0e9866ce1f659",
".git/objects/ac/c2fad81a8ddb9db3512af76b61c019b95645ad": "ab5fcc4922e3d8585a0a376547d83765",
".git/objects/b0/4ea0cb8cbe81e547e9015b992ce2971e5a6968": "bfb617cead7ba7a5bd3ca511b4e73371",
".git/objects/b2/d92d7f19c2b7df297d3d3cf57fb67e8958d1fb": "6a3f98bea2b2664e2fd3fc173d2a74b2",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/bd/a6a9d58292b2a35392b06e7bfc3b6fd3d63496": "80605a6827e674b9c86560729b543cbd",
".git/objects/be/5292bd3a3c110724e48de30b967b1616da04ae": "4188d1ba28846ea3d7bb49d34a20fc6d",
".git/objects/bf/7d2f3b6bf16448acc7f16e7312069d402f7b80": "d23681677dd2cc8787a82c0c2d001469",
".git/objects/c1/c92734d3a203516846e8812f68f29fb1040b70": "3943589686b9d511b314b3f76a8768e6",
".git/objects/c2/a728121cc94290e0e8dbde82b1e5125d5465a6": "f2989bf1405fb660305820683b8ee53c",
".git/objects/c2/e7b502a413cd7f973b8e38b709c36a27d08a0f": "c53fdf58278174013454ab823cdddbae",
".git/objects/c4/3042d8aa61e4512a76e7f14a9bdb99e86f5e0a": "ecc93aa81bd0693007d5427e7d116747",
".git/objects/c4/be6611dc194a5f07146bea7ffa1e94bb0f3b4d": "6b15236e58d3f69a75e291b7c5ebe4db",
".git/objects/c7/35dd583133d8e453135a1d372ce5560d6fb026": "9a26e304b90a6466548875709d9b6b61",
".git/objects/c7/3a5171d2f4ac4728ce5df8f7ee939f2083a990": "f5dbe503fd8fa26e0e19466ffddfbab4",
".git/objects/ca/36518349ada1f73c3545bc75dd2efcdb5cfd4f": "950f63ede833068d6a4b9720bfcd0167",
".git/objects/ca/ccc02687b213804b3b3db6a2352cde612d20a5": "6a6ab6fbd7fefebda9d6d052b360e7b8",
".git/objects/cd/fcbe7c6def32485cf45fcade02c9244dcf3e6f": "459195fb1f0e5ab237be3ac10ce324a9",
".git/objects/ce/08e34ad7a363e20fb0b0f1ec5144d9c483550b": "c9baf29d44b8cda99a7039c442d97d47",
".git/objects/d3/b67ec5e0ef448fbc0f80d89aa923f807ee3415": "62ef42d8b7e4e09a23d7791d5e8bd97d",
".git/objects/d8/e87a17cd7c9218d63a447b47037755c7bd0fce": "f3b612c7fb2482103fcdfd9fa14e3539",
".git/objects/da/a1d64dbe550337929e855cc0c9bb97cf1f705c": "aa125ac26af61a1dee46b37f678ee324",
".git/objects/dd/43db65edcbfd810943d4270e20d3703447c26d": "b41f2c4cbaf5f3425cc1445d4e1e098e",
".git/objects/e0/5504faea69d8f041ef4a81aaaf1106aa399969": "b9659e1b0c8f953cc77e0324c294c6a6",
".git/objects/e0/98d9a115da6390c4e2ffe51fe9198515249ed7": "d72b0da9b849cb275e8d44e6cb602b6a",
".git/objects/e1/1c048a9a207b6eab29b8f6052f90f9b5405882": "7baf60f29be11bffcb60aa795a0291aa",
".git/objects/e4/3d3cf4f683b32fcd12ea1d0f443cc118b93244": "33a30cf82039a508b625ea110d4dd379",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/e5/c187d932d8f3f315f06dcc18951be120159910": "9271021b89d979ff79a7446d564dd60f",
".git/objects/e7/54d617a7b19f522b02372878c0f1124e1585be": "b0c745cc51267b04a5864ba56c02885b",
".git/objects/eb/2fc6a56843fdb998e4ba5a321ad4aaf827a112": "0fb0c1b381b8a1d34f87678a71825161",
".git/objects/f1/7d5a5014e4ae9c7d9d5f8de26fec398f65e44c": "e8f04124372d550cb6c2b42e572f972f",
".git/objects/f2/3eab6586778d21be1ce4464f92f1581faa96fd": "98926ae8b48f1f62e484bb0205d3c3cb",
".git/objects/f2/5787c93ad00665f0f797a43ab397f0628a273e": "59e425d1456034072d902c75d18ec75f",
".git/objects/f4/b4af10bce7b0dd01812aec671a246789386a09": "cf664e9c99c75d1322fa10c86e378c04",
".git/objects/f4/cb99796f1ef48ebb3fd06aa27552d5bd3a14f1": "91dbf626fbc216c8ec4093ae6a2c697f",
".git/objects/f7/c377332094d9ec8bdd5273356b4f47dd6243f1": "24a5db45cdf43ca0bd289212109f3f21",
".git/objects/f9/56cb142b72a8e271e813e6ae551c835e98abb6": "97277c65db15a5e7c3cfc280ecb19e4a",
".git/objects/f9/ae777eb06482e76573daf93f7851293041ea05": "7e2b2550ba559e4a70cf07ec4377371f",
".git/objects/fb/b5105e99b075c3734ffc709acd3ee590fe22b9": "32d12fcca206500b8bdbf9a712649d2c",
".git/ORIG_HEAD": "a4f2cc2375f739d9c9e93a8a5487c82e",
".git/refs/heads/master": "480c3a1275e8913ca816f306f60a5a5f",
".git/refs/remotes/origin/master": "480c3a1275e8913ca816f306f60a5a5f",
"assets/AssetManifest.json": "f67d9ab15492d1bb61b7e2d91539f20f",
"assets/FontManifest.json": "5a32d4310a6f5d9a6b651e75ba0d7372",
"assets/fonts/MaterialIcons-Regular.otf": "1288c9e28052e028aba623321f7826ac",
"assets/img/aderoo.png": "4c5e601654956ba75d1feac354f1f4f0",
"assets/img/covid.jpg": "dacd8d45400240e0dd55c97f87d71412",
"assets/img/css.png": "32ee32289c143384b0477628840ea3e2",
"assets/img/flutter.png": "8ba1d5b022cd7f5999bea3085e87ceb0",
"assets/img/galleryPage1.jpg": "c1ac78fc1636f044e6f129726c1a05d2",
"assets/img/git.png": "728ff5a8e44d74cd0f2359ef0a9ec88a",
"assets/img/hamburger_menu.jpg": "ea8ed3ecbd62521a9f7ad1aea2a16796",
"assets/img/headshot.jpg": "ccbda9a2eebc96897dcf809efa48a9a0",
"assets/img/homePage.jpg": "f621084874db39da91c1b728689d31e3",
"assets/img/html.png": "acd5a2ae817b3661d09d5c5578785aa9",
"assets/img/javascript.png": "d5ee029a5980fc1e164d078b7801f2bb",
"assets/img/loginPage.jpg": "92bce2c0ae4cef33c93cd3fe48d13798",
"assets/img/mac-mood-app1.jpg": "a83204b4b8de1a226085d9ba5a0d44f5",
"assets/img/mac-mood-app2.jpg": "1ef2ff3a3a04afa83bcf24715220392e",
"assets/img/mac-mood-app3.jpg": "36d4d440c292bba6fd52c8edd1e47b35",
"assets/img/python.png": "9ae7d0c2a37c4626d2ea58f615906814",
"assets/img/react.png": "638be90904f9f9248d3c69cb2992c562",
"assets/img/txstate.png": "7351add8983e58265ed87f89fc7cc598",
"assets/img/vscode.png": "e379a7366289c102767ac262864646f1",
"assets/NOTICES": "ffcf4e48960ee22b0abb0a905ade5fa7",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "00bb2b684be61e89d1bc7d75dee30b58",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "4b6a9b7c20913279a3ad3dd9c96e155b",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "dffd9504fcb1894620fa41c700172994",
"assets/packages/glass_kit/assets/noise.png": "86f22ae1a498bb8f0c39264f9c7c796c",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"index.html": "0b3832c5c960ba93b796aa01bbed37ad",
"/": "0b3832c5c960ba93b796aa01bbed37ad",
"main.dart.js": "0674689f27fd19031031978014608471",
"manifest.json": "5a2c0526f1fe73e6f211bc7a9d15c210",
"README.md": "359ea64c5c2797738508ea6b62ddbdba",
"version.json": "426313f2f3133c2f20415344c4a22df3"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value + '?revision=' + RESOURCES[value], {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
