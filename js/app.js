import { APP_CONFIG } from './data.js';

const translations = {
    ru: {
        level: "Уровень", mining_rig: "Майнинг-установка Ур.", hourly: "5 часов", daily: "Ежедневно", monthly: "Ежемесячно",
        start_mining: "НАЧАТЬ МАЙНИНГ", claim_reward: "ПОЛУЧИТЬ НАГРАДУ", mining_note: "Награды можно получить после окончания сеанса майнинга",
        next_level_reward: "Награда за следующий уровень", power: "Энергия", ton: "GRAM", promo_code: "Промокод",
        enter_code: "Введите код", claim: "Получить", partner_tasks: "Социальные задания",
        watch_ad: "Смотреть рекламу", reward_amount: "Награда", available_in: "Доступно через", hours: "ч",
        watch: "Смотреть", all_tasks_completed: "Все задания выполнены!", check_later: "Заходите позже за новыми",
        no_tasks: "Нет доступных заданий", team_benefits: "Преимущества команды", share_earn: "ДЕЛИСЬ И ЗАРАБАТЫВАЙ",
        copy: "Копировать", share: "Поделиться", total_members: "Всего участников",
        power_earnings: "Заработок энергии", withdraw: "Вывести",
        available: "Доступно", ton_wallet: "кошелек", amount: "Сумма", min_withdraw: "Мин. вывод",
        confirm_withdrawal: "Подтвердить вывод", withdrawal_history: "История выводов", no_withdrawals: "Пока нет выводов",
        pending: "В ОЖИДАНИИ", completed: "ВЫПЛАЧЕНО", claim_mining_title: "Получить награды майнинга", claim_btn: "Получить награды",
        partner_info_title: "Социальные задания", mining: "Майнинг", earn: "Заработок", team: "Команда",
        copy_success: "Скопировано!", link_copied: "Ссылка скопирована", earn_more: "Заработай больше энергии",
        complete_tasks: "Выполнить задания", go: "ПЕРЕЙТИ", invite_frens: "Пригласить друзей", ad_reward: "Смотреть рекламу", loading: "Загрузка",
        ready: "Готово", mining_active: "МАЙНИНГ АКТИВЕН", team_earnings: "Зарабатывайте %from%% от дохода команды", save_error: "Ошибка сохранения данных! Попробуйте снова.",
        daily_tasks: "Ежедневные задания", daily_check_news: "Проверка новостей", refresh_in: "Обновление через",
        watch_ad_btn: "СМОТРЕТЬ", claiming: "Получение...", promo_info_title: "Как получить промокоды?", promo_info_text: "Получайте промокоды в нашем новостном канале! Подпишитесь, чтобы не пропустить новые коды.",
        get_promo_codes: "Получить промокоды", promo_from_news: "Промокоды в Telegram",
        how_it_works: "Как это работает", step1: "Подпишитесь на наш новостной канал", step2: "Следите за новыми публикациями", step3: "Вводите промокоды и получайте награды",
        available_tasks: "Доступные задания", completed_tasks: "Выполненные задания", no_tasks_available: "Нет доступных заданий", my_tasks: "Мои задания",
        add_task: "Добавить задание", task_name: "Название задачи", task_url: "Ссылка", verification: "Проверка", max_completions: "Макс. выполнений",
        price: "Цена", pay_with_stars: "Оплатить Stars", referral_bonus: "Бонус за реферала",
        referrer_reward_notification: "You received a bonus! Your referral completed the requirements",
        ban_message: "Ваш аккаунт заблокирован. Обратитесь в поддержку.",
        withdrawal_requested: "Запрос на вывод",
        new_referral: "Новый реферал",
        task_payment_failed: "Ошибка оплаты задачи",
        earn_power_referral: "Заработайте {reward} энергии за подтвержденного реферала",
        earn_percent_friends: "Зарабатывайте {percent}% от дохода друзей",
        task_name_placeholder: "Введите название задачи",
        task_url_placeholder: "Введите URL задачи (https://t.me/..)",
        verification_yes: "ДА",
        verification_no: "НЕТ",
        completions_100: "100",
        completions_250: "250",
        completions_500: "500",
        completions_1000: "1000",
        pay_stars: "ОПЛАТИТЬ {stars} ЗВЕЗД",
        no_tasks_created: "Нет созданных задач",
        no_tasks_created_sub: "Создайте свою первую задачу!",
        pending_status: "НА РАССМОТРЕНИИ",
        active_status: "АКТИВНА",
        completions_count: "выполнений",
        add_task_title: "Добавить социальное задание",
        my_tasks_title: "Мои задания",
        withdrawal_fees_note: "Комиссия за вывод: {fees} GRAM",
        all_fields_required: "Пожалуйста, заполните все поля",
        add_bot_as_admin: "Добавить бота администратором",
        team_benefits_title: "Преимущества команды",
        team_benefit_referral_power: "Заработайте {reward} энергии за подтвержденного реферала",
        team_benefit_referral_percent: "Зарабатывайте {percent}% от дохода друзей",
        reward_added: "Награда добавлена! +{reward} Power",
        welcome_bonus: "Welcome Bonus", up_to_level: "Up To Level {level}", start_mining_quest: "Start Mining {times} Times",
        claim_quest: "Claim", claimed: "Claimed", quests_title: "ZENTRIX Quests", choose_completions: "Choose total completions first",
        daily_bonus: "Daily Bonus", claim_daily_bonus: "Claim", daily_bonus_claimed: "Already Claimed",
        invite_earn: "Invite & Earn Power", verified_member: "Verified Member", team_earnings: "Team Earnings",
        more_active_members: "More active members, more profits", copy_link: "Copy Link", get_referrals: "Get Referrals",
        total_members: "Total Members", active_members: "Active Members", total_earnings: "Total Earnings"
    },
    en: {
        level: "Level", mining_rig: "Mining Rig Lv.", hourly: "5 Hours", daily: "Daily", monthly: "Monthly",
        start_mining: "START MINING", claim_reward: "CLAIM REWARD", mining_note: "Rewards can be collected after mining session ends",
        next_level_reward: "Next level reward", power: "Power", ton: "GRAM", promo_code: "Promo Code",
        enter_code: "Enter code", claim: "Claim", partner_tasks: "Social Tasks",
        watch_ad: "Watch Reward AD", reward_amount: "Reward", available_in: "Available in", hours: "h",
        watch: "Watch", all_tasks_completed: "All tasks completed!", check_later: "Check back later for more",
        no_tasks: "No tasks available", team_benefits: "Team Benefits", share_earn: "SHARE & EARN",
        copy: "Copy", share: "Share", total_members: "Total Members",
        power_earnings: "Power Earnings", withdraw: "Withdraw",
        available: "Available", ton_wallet: "GRAM Wallet", amount: "Amount", min_withdraw: "Minimum withdrawal",
        confirm_withdrawal: "Confirm Withdrawal", withdrawal_history: "Withdrawal History", no_withdrawals: "No withdrawals yet",
        pending: "PENDING", completed: "PAID", claim_mining_title: "Claim Mining Rewards", claim_btn: "Claim Rewards",
        partner_info_title: "Social Tasks", mining: "Mining", earn: "Earn", team: "Team",
        copy_success: "Copied!", link_copied: "Link copied to clipboard", earn_more: "Earn More Power",
        complete_tasks: "Complete Tasks", go: "GO", invite_frens: "Invite Frens", ad_reward: "Watch AD", loading: "Loading",
        ready: "Ready", mining_active: "MINING ACTIVE", team_earnings: "Earn %from%% from team earnings", save_error: "Data save failed! Please try again.",
        daily_tasks: "Daily Tasks", daily_check_news: "Daily Check News", refresh_in: "Refresh in",
        watch_ad_btn: "WATCH", claiming: "Claiming...", promo_info_title: "How to get Promo Codes?", promo_info_text: "Get promo codes from our news channel! Subscribe to never miss new codes.",
        get_promo_codes: "Get Promo Codes", promo_from_news: "Promo Codes on Telegram",
        how_it_works: "How it works", step1: "Subscribe to our news channel", step2: "Follow new posts", step3: "Enter promo codes and get rewards",
        available_tasks: "Available Tasks", completed_tasks: "Completed Tasks", no_tasks_available: "No tasks available", my_tasks: "My Tasks",
        add_task: "Add Task", task_name: "Task Name", task_url: "URL", verification: "Verification", max_completions: "Max Completions",
        price: "Price", pay_with_stars: "Pay with Stars", referral_bonus: "💥 Referral Bonus",
        referrer_reward_notification: "⚡ You received a bonus! Your referral completed the requirements",
        ban_message: "Your account has been banned. Please contact support.",
        withdrawal_requested: "Withdrawal Requested",
        new_referral: "New Referral",
        task_payment_failed: "Task Payment Failed",
        earn_power_referral: "Earn {reward} Power Per Verified Referral",
        earn_percent_friends: "Earn {percent}% From Friends Earnings",
        task_name_placeholder: "Enter Task Name",
        task_url_placeholder: "Enter Task URL (https://t.me/..)",
        verification_yes: "YES",
        verification_no: "NO",
        completions_100: "100",
        completions_250: "250",
        completions_500: "500",
        completions_1000: "1000",
        pay_stars: "PAY {stars} STAR",
        no_tasks_created: "No tasks created",
        no_tasks_created_sub: "Create your first task now!",
        pending_status: "PENDING",
        active_status: "ACTIVE",
        completions_count: "completions",
        add_task_title: "Add Social Task",
        my_tasks_title: "My Tasks",
        withdrawal_fees_note: "Withdrawal fees: {fees} GRAM",
        all_fields_required: "Please fill all fields",
        add_bot_as_admin: "Add Bot As Admin",
        team_benefits_title: "Team Benefits",
        team_benefit_referral_power: "Earn {reward} Power per verified referral",
        team_benefit_referral_percent: "Earn {percent}% from friends earnings",
        reward_added: "Reward Added! +{reward} Power",
        welcome_bonus: "Welcome Bonus", up_to_level: "Up To Level {level}", start_mining_quest: "Start Mining {times} Times",
        claim_quest: "Claim", claimed: "Claimed", quests_title: "ZENTRIX Quests", choose_completions: "Choose total completions first",
        daily_bonus: "Daily Bonus", claim_daily_bonus: "Claim", daily_bonus_claimed: "Already Claimed",
        invite_earn: "Invite & Earn Power", verified_member: "Verified Member", team_earnings: "Team Earnings",
        more_active_members: "More active members, more profits", copy_link: "Copy Link", get_referrals: "Get Referrals",
        total_members: "Total Members", active_members: "Active Members", total_earnings: "Total Earnings"
    },
    tr: {
        level: "Seviye", mining_rig: "Madenci Seviye", hourly: "5 saat", daily: "Günlük", monthly: "Aylık",
        start_mining: "MADENCİLİĞE BAŞLA", claim_reward: "ÖDÜLÜ AL", mining_note: "Ödüller madencilik oturumu bittikten sonra toplanabilir",
        next_level_reward: "Sonraki seviye ödülü", power: "Güç", ton: "GRAM", promo_code: "Promosyon Kodu",
        enter_code: "Kodu girin", claim: "Al", partner_tasks: "Sosyal Görevler",
        watch_ad: "Ödüllü Reklam İzle", reward_amount: "Ödül", available_in: "Kalan süre", hours: "sa",
        watch: "İzle", all_tasks_completed: "Tüm görevler tamamlandı!", check_later: "Daha fazlası için daha sonra kontrol edin",
        no_tasks: "Görev yok", team_benefits: "Takım Avantajları", share_earn: "PAYLAŞ VE KAZAN",
        copy: "Kopyala", share: "Paylaş", total_members: "Toplam Üye",
        power_earnings: "Güç Kazancı", withdraw: "Çek",
        available: "Mevcut", ton_wallet: "GRAM Cüzdanı", amount: "Miktar", min_withdraw: "Minimum çekim",
        confirm_withdrawal: "Çekimi Onayla", withdrawal_history: "Çekim Geçmişi", no_withdrawals: "Henüz çekim yok",
        pending: "beklemede", completed: "tamamlandı", claim_mining_title: "Madencilik Ödüllerini Al", claim_btn: "Ödülleri Al",
        partner_info_title: "Sosyal Görevler", mining: "Madencilik", earn: "Kazan", team: "Takım",
        copy_success: "Kopyalandı!", link_copied: "Bağlantı panoya kopyalandı", earn_more: "Daha Fazla Güç Kazan",
        complete_tasks: "Görevleri Tamamla", go: "GİT", invite_frens: "Arkadaşları Davet Et", ad_reward: "Reklam İzle", loading: "Yükleniyor",
        ready: "Hazır", mining_active: "MADENCİLİK AKTİF", team_earnings: "Takım kazancından %from%% kazanın", save_error: "Veri kaydedilemedi! Lütfen tekrar deneyin.",
        daily_tasks: "Günlük Görevler", daily_check_news: "Günlük Haber Kontrolü", refresh_in: "Yenileme süresi",
        watch_ad_btn: "İZLE", claiming: "Alınıyor...", promo_info_title: "Promosyon Kodları Nasıl Alınır?", promo_info_text: "Promosyon kodlarını haber kanalımızdan alın! Yeni kodları kaçırmamak için abone olun.",
        get_promo_codes: "Promosyon Kodları Al", promo_from_news: "Telegram'da Promosyon Kodları",
        how_it_works: "Nasıl çalışır", step1: "Haber kanalımıza abone olun", step2: "Yeni gönderileri takip edin", step3: "Promosyon kodlarını girin ve ödülleri alın",
        available_tasks: "Mevcut Görevler", completed_tasks: "Tamamlanan Görevler", no_tasks_available: "Görev yok", my_tasks: "Görevlerim",
        add_task: "Görev Ekle", task_name: "Görev Adı", task_url: "Bağlantı", verification: "Doğrulama", max_completions: "Maks. Tamamlama",
        price: "Fiyat", pay_with_stars: "Yıldız ile Öde", referral_bonus: "💥 Referans Bonusu",
        referrer_reward_notification: "⚡ Bonus kazandınız! Referansınız koşulları tamamladı",
        ban_message: "Hesabınız yasaklandı. Lütfen desteğe başvurun.",
        withdrawal_requested: "Çekim Talebi",
        new_referral: "Yeni Referans",
        task_payment_failed: "Görev Ödemesi Başarısız",
        earn_power_referral: "Doğrulanmış Referans Başına {reward} Güç Kazanın",
        earn_percent_friends: "Arkadaş Kazançlarından {percent}% Kazanın",
        task_name_placeholder: "Görev Adını Girin",
        task_url_placeholder: "Görev URL'sini Girin (https://t.me/..)",
        verification_yes: "EVET",
        verification_no: "HAYIR",
        completions_100: "100",
        completions_250: "250",
        completions_500: "500",
        completions_1000: "1000",
        pay_stars: "{stars} YILDIZ ÖDE",
        no_tasks_created: "Görev oluşturulmadı",
        no_tasks_created_sub: "Şimdi ilk görevinizi oluşturun!",
        pending_status: "BEKLEMEDE",
        active_status: "AKTİF",
        completions_count: "tamamlama",
        add_task_title: "Sosyal Görev Ekle",
        my_tasks_title: "Görevlerim",
        withdrawal_fees_note: "Çekim ücreti: {fees} GRAM",
        all_fields_required: "Lütfen tüm alanları doldurun",
        add_bot_as_admin: "Botu Yönetici Olarak Ekle",
        team_benefits_title: "Takım Avantajları",
        team_benefit_referral_power: "Doğrulanmış referans başına {reward} Güç kazanın",
        team_benefit_referral_percent: "Arkadaş kazançlarından %{percent} kazanın",
        reward_added: "Ödül Eklendi! +{reward} Power",
        welcome_bonus: "Welcome Bonus", up_to_level: "Up To Level {level}", start_mining_quest: "Start Mining {times} Times",
        claim_quest: "Claim", claimed: "Claimed", quests_title: "ZENTRIX Quests", choose_completions: "Choose total completions first",
        daily_bonus: "Daily Bonus", claim_daily_bonus: "Claim", daily_bonus_claimed: "Already Claimed",
        invite_earn: "Invite & Earn", verified_member: "Verified Member", team_earnings: "Team Earnings",
        more_active_members: "More active members, more profits", copy_link: "Copy Link", get_referrals: "Get Referrals",
        total_members: "Total Members", active_members: "Active Members", total_earnings: "Total Earnings"
    },
    ar: {
        level: "مستوى", mining_rig: "جهاز التعدين مستوى", hourly: "كل 5 ساعات", daily: "يومي", monthly: "شهري",
        start_mining: "بدء التعدين", claim_reward: "استلام المكافأة", mining_note: "يمكن جمع المكافآت بعد انتهاء جلسة التعدين",
        next_level_reward: "مكافأة المستوى التالي", power: "الطاقة", ton: "غرام", promo_code: "رمز ترويجي",
        enter_code: "أدخل الرمز", claim: "استلام", partner_tasks: "المهام الاجتماعية",
        watch_ad: "مشاهدة إعلان مكافأة", reward_amount: "المكافأة", available_in: "متاح بعد", hours: "ساعة",
        watch: "مشاهدة", all_tasks_completed: "جميع المهام مكتملة!", check_later: "تحقق لاحقاً للمزيد",
        no_tasks: "لا توجد مهام متاحة", team_benefits: "مزايا الفريق", share_earn: "شارك واربح",
        copy: "نسخ", share: "مشاركة", total_members: "إجمالي الأعضاء",
        power_earnings: "أرباح الطاقة", withdraw: "سحب",
        available: "الرصيد المتوفر", ton_wallet: "محفظة غرام", amount: "المبلغ", min_withdraw: "الحد الأدنى للسحب",
        confirm_withdrawal: "تأكيد السحب", withdrawal_history: "سجل السحوبات", no_withdrawals: "لا توجد سحوبات بعد",
        pending: "قيد الانتظار", completed: "مكتمل", claim_mining_title: "استلام مكافآت التعدين", claim_btn: "استلام المكافآت",
        partner_info_title: "المهام الاجتماعية", mining: "التعدين", earn: "الأرباح", team: "الفريق",
        copy_success: "تم النسخ!", link_copied: "تم نسخ الرابط", earn_more: "احصل على طاقة أكثر",
        complete_tasks: "إكمال المهام", go: "اذهب", invite_frens: "دعوة الأصدقاء", ad_reward: "مشاهدة إعلان", loading: "جاري التحميل",
        ready: "جاهز", mining_active: "التعدين نشط", team_earnings: "اربح %from%% من أرباح الفريق", save_error: "فشل حفظ البيانات! حاول مرة أخرى.",
        daily_tasks: "المهام اليومية", daily_check_news: "فحص الأخبار اليومي", refresh_in: "تحديث خلال",
        watch_ad_btn: "شاهد", claiming: "جاري الاستلام...", promo_info_title: "كيفية الحصول على الرموز الترويجية؟", promo_info_text: "احصل على الرموز الترويجية من قناة الأخبار الخاصة بنا! اشترك لعدم تفويت الرموز الجديدة.",
        get_promo_codes: "الحصول على الرموز الترويجية", promo_from_news: "الرموز الترويجية على تيليغرام",
        how_it_works: "كيف يعمل", step1: "1. اشترك في قناة الأخبار", step2: "2. تابع المنشورات الجديدة", step3: "3. أدخل الرموز الترويجية واحصل على المكافآت",
        available_tasks: "المهام المتاحة", completed_tasks: "المهام المكتملة", no_tasks_available: "لا توجد مهام متاحة", my_tasks: "مهامي",
        add_task: "إضافة مهمة", task_name: "اسم المهمة", task_url: "الرابط", verification: "التحقق", max_completions: "الحد الأقصى للإكمال",
        price: "السعر", pay_with_stars: "الدفع بالنجوم", referral_bonus: "مكافأة الإحالة",
        referrer_reward_notification: "لقد تلقيت مكافأة! قام المحال الخاص بك بإكمال المتطلبات",
        ban_message: "تم حظر حسابك. يرجى الاتصال بالدعم.",
        withdrawal_requested: "طلب السحب",
        new_referral: "إحالة جديدة",
        task_payment_failed: "فشل دفع المهمة",
        earn_power_referral: "اربح {reward} طاقة لكل إحالة مؤكدة",
        earn_percent_friends: "اربح {percent}% من أرباح الأصدقاء",
        task_name_placeholder: "أدخل اسم المهمة",
        task_url_placeholder: "أدخل رابط المهمة (https://t.me/..)",
        verification_yes: "نعم",
        verification_no: "لا",
        completions_100: "100",
        completions_250: "250",
        completions_500: "500",
        completions_1000: "1000",
        pay_stars: "ادفع {stars} نجمة",
        no_tasks_created: "لا توجد مهام منشأة",
        no_tasks_created_sub: "أنشئ مهمتك الأولى الآن!",
        pending_status: "قيد المراجعة",
        active_status: "نشطة",
        completions_count: "إكمال",
        add_task_title: "إضافة مهمة اجتماعية",
        my_tasks_title: "مهامي",
        withdrawal_fees_note: "رسوم السحب: {fees} غرام",
        all_fields_required: "الرجاء ملء جميع الحقول",
        add_bot_as_admin: "إضافة البوت كمدير",
        team_benefits_title: "مزايا الفريق",
        team_benefit_referral_power: "اربح {reward} طاقة لكل إحالة مؤكدة",
        team_benefit_referral_percent: "اربح {percent}% من أرباح الأصدقاء",
        reward_added: "تمت إضافة المكافأة! +{reward} طاقة",
        welcome_bonus: "Welcome Bonus", up_to_level: "Up To Level {level}", start_mining_quest: "Start Mining {times} Times",
        claim_quest: "Claim", claimed: "Claimed", quests_title: "ZENTRIX Quests", choose_completions: "Choose total completions first",
        daily_bonus: "المكافأة اليومية", claim_daily_bonus: "استلام", daily_bonus_claimed: "تم الاستلام بالفعل",
        invite_earn: "دعوة واربح Power", verified_member: "عضو مؤكد", team_earnings: "أرباح الفريق",
        more_active_members: "كلما زاد الأعضاء النشطاء، زادت الأرباح", copy_link: "نسخ الرابط", get_referrals: "احصل على الإحالات",
        total_members: "إجمالي الأعضاء", active_members: "الأعضاء النشطاء", total_earnings: "إجمالي الأرباح"
    }
};

class App {
    constructor() {
        this.tg = null;
        this.db = null;
        this.auth = null;
        this.tgUser = null;
        this.isInitialized = false;
        this.deviceId = null;
        this.deviceOwnerId = null;
        
        this.powerBalance = 0;
        this.tonBalance = 0;
        this.userLevel = 1;
        this.hasStartedMining = false;
        this.userCompletedTasks = new Set();
        this.userCompletedMainTasks = new Set();
        this.userCompletedPromoCodes = new Set();
        this.userCompletedSocialTasks = new Map();
        this.miningActive = false;
        this.miningStartTime = null;
        this.miningEndTime = null;
        this.miningInterval = null;
        this.uiUpdateInterval = null;
        this.pendingTonReward = 0;
        this.miningSessionHours = APP_CONFIG.MINING_SESSION_HOURS;
        this.withdrawals = [];
        this.totalReferrals = 0;
        this.referralPower = 0;
        this.isTaskRunning = false;
        this.mainTasks = [];
        this.partnerTasks = [];
        this.userTasks = [];
        this.userState = null;
        
        this.lastRewardAdTime = 0;
        this.lang = 'en';
        this.cooldownInterval = null;
        
        this.vibrationEnabled = true;
        this.loadSettings();
        this.referredBy = null;
        this.referralRewardGiven = false;
        this.totalTasksCompleted = 0;
        this.totalMiningStarts = 0;
        
        this.serverTimeOffset = 0;
        
        this._dirtyPower = false;
        this._dirtyTon = false;
        this._dirtyMining = false;
        this._saveTimeout = null;
        this._isSaving = false;
        
        this.cache = {
            tasks: null,
            tasksTime: 0
        };
        
        this._userDataLoaded = false;
        this._earnLoaded = false;
        this._teamLoaded = false;
        this._withdrawLoaded = false;
        this._withdrawLock = false;
        
        this.lastDailyCheckNews = 0;
        this.dailyCheckNewsCompleted = false;
        this.dailyTasksCompleted = new Map();
        
        this.membershipCache = new Map();
        this.pendingTask = null;
        this.pendingPaymentInterval = null;
        
        this.quests = {
            welcomeBonusClaimed: false,
            currentLevelQuestIndex: 0,
            currentMiningQuestIndex: 0
        };
        
        this.taskCompletionTimers = new Map();
        
        this.dailyBonusClaimed = false;
        this.dailyBonusDate = null;
    }
    
    truncateName(name, maxLength = 15) {
        if (!name) return 'User';
        if (name.length <= maxLength) return name;
        return name.substring(0, maxLength) + '...';
    }
    
    t(key, params = {}) {
        let text = translations[this.lang]?.[key] || translations.en[key] || key;
        for (const [k, v] of Object.entries(params)) {
            text = text.replace(`{${k}}`, v);
        }
        if (key === 'team_earnings') {
            text = text.replace('%from%', APP_CONFIG.REFERRAL_PERCENTAGE);
        }
        return text;
    }
    
    formatNumber(num) {
        if (num >= 1000000) return (num / 1000000).toFixed(2) + 'M';
        if (num >= 1000) return (num / 1000).toFixed(2) + 'K';
        return num.toString();
    }
    
    getHourlyTonRate() {
        return (this.powerBalance / 1000) * APP_CONFIG.POWER_PER_TON_RATE;
    }
    getDailyTonRate() {
        return this.getHourlyTonRate() * 24;
    }
    getMonthlyTonRate() {
        return this.getDailyTonRate() * 30;
    }
    
    calculateRewardForHours(hours) {
        return this.getHourlyTonRate() * hours;
    }
    
    updateLevelFromPower() {
        const power = this.powerBalance;
        let newLevel = 1;
        
        if (power >= 600000) newLevel = 10;
        else if (power >= 500000) newLevel = 9;
        else if (power >= 400000) newLevel = 8;
        else if (power >= 300000) newLevel = 7;
        else if (power >= 200000) newLevel = 6;
        else if (power >= 100000) newLevel = 5;
        else if (power >= 80000) newLevel = 4;
        else if (power >= 40000) newLevel = 3;
        else if (power >= 20000) newLevel = 2;
        else newLevel = 1;
        
        const oldLevel = this.userLevel;
        this.userLevel = newLevel;
        
        const levelSpan = document.getElementById('user-level');
        const levelBadge = document.getElementById('user-level-badge');
        if (levelSpan) levelSpan.innerText = this.userLevel;
        if (levelBadge) levelBadge.innerText = this.userLevel;
        
        localStorage.setItem(`user_level_${this.tgUser?.id}`, this.userLevel.toString());
        this.updateHeaderBalances();
        
        if (oldLevel !== newLevel && this.db && this.tgUser) {
            this.db.ref(`users/${this.tgUser.id}`).update({ level: newLevel });
            this.renderMining();
            if (this._earnLoaded) this.renderEarn();
        }
    }
    
    updateHeaderBalances() {
        const powerHeader = document.getElementById('header-power');
        const tonHeader = document.getElementById('header-ton');
        if (powerHeader) powerHeader.innerHTML = `<i class="fas fa-bolt"></i> ${this.formatNumber(Math.floor(this.powerBalance))}`;
        if (tonHeader) tonHeader.innerHTML = `<img src="${APP_CONFIG.GRAM_ICON}" style="width:14px;height:14px;border-radius:50%;object-fit:cover;"> ${this.tonBalance.toFixed(5)}`;
    }
    
    getRequiredPowerForLevel(level) {
        if (level === 2) return 20000;
        if (level === 3) return 40000;
        if (level === 4) return 80000;
        if (level === 5) return 100000;
        if (level === 6) return 200000;
        if (level === 7) return 300000;
        if (level === 8) return 400000;
        if (level === 9) return 500000;
        if (level === 10) return 600000;
        return 1000;
    }
    
    async loadQuestsData() {
        if (!this.db || !this.tgUser) return;
        try {
            const snap = await this.db.ref(`users/${this.tgUser.id}/quests`).once('value');
            if (snap.exists()) {
                this.quests = snap.val();
            } else {
                this.quests = {
                    welcomeBonusClaimed: false,
                    currentLevelQuestIndex: 0,
                    currentMiningQuestIndex: 0
                };
                await this.saveQuestsData();
            }
        } catch (error) {
            console.warn('Failed to load quests data:', error);
        }
    }
    
    async saveQuestsData() {
        if (!this.db || !this.tgUser) return;
        try {
            await this.db.ref(`users/${this.tgUser.id}/quests`).set(this.quests);
        } catch (error) {
            console.warn('Failed to save quests data:', error);
        }
    }
    
    getCurrentLevelQuest() {
        if (this.quests.currentLevelQuestIndex >= APP_CONFIG.QUESTS.level_quests.length) {
            return null;
        }
        return APP_CONFIG.QUESTS.level_quests[this.quests.currentLevelQuestIndex];
    }
    
    getCurrentMiningQuest() {
        if (this.quests.currentMiningQuestIndex >= APP_CONFIG.QUESTS.mining_quests.length) {
            return null;
        }
        return APP_CONFIG.QUESTS.mining_quests[this.quests.currentMiningQuestIndex];
    }
    
    async checkAndUpdateLevelQuest() {
        const currentQuest = this.getCurrentLevelQuest();
        if (!currentQuest) return false;
        if (this.userLevel >= currentQuest.target_level) {
            return true;
        }
        return false;
    }
    
    async checkAndUpdateMiningQuest() {
        const currentQuest = this.getCurrentMiningQuest();
        if (!currentQuest) return false;
        if (this.totalMiningStarts >= currentQuest.target_starts) {
            return true;
        }
        return false;
    }
    
    async claimWelcomeBonus() {
        if (this.quests.welcomeBonusClaimed) {
            this.showNotification('Already Claimed', 'Welcome bonus already claimed', 'warning');
            return false;
        }
        
        try {
            const AdController = window.Adsgram.init({ blockId: APP_CONFIG.INTERSTITIAL_AD_BLOCK_ID });
            await AdController.show();
        } catch (e) {
            this.showNotification('No Ads', 'No ads available at the moment', 'warning');
            return false;
        }
        
        const reward = APP_CONFIG.QUESTS.welcome_bonus.reward;
        const originalPower = this.powerBalance;
        this.powerBalance += reward;
        this._dirtyPower = true;
        
        const saved = await this.saveUserData(true);
        
        if (!saved) {
            this.powerBalance = originalPower;
            this._dirtyPower = false;
            this.showNotification('Error', this.t('save_error'), 'error');
            return false;
        }
        
        this.quests.welcomeBonusClaimed = true;
        await this.saveQuestsData();
        await this.updateLevelFromPower();
        this.renderMining();
        if (this._earnLoaded) this.renderEarn();
        this.showNotification('Bonus Claimed!', `+${reward} Power`, 'success');
        return true;
    }
    
    async claimLevelQuest() {
        const currentQuest = this.getCurrentLevelQuest();
        if (!currentQuest) {
            this.showNotification('No Quest', 'No level quest available', 'warning');
            return false;
        }
        
        if (this.userLevel < currentQuest.target_level) {
            this.showNotification('Not Ready', `Reach level ${currentQuest.target_level} first`, 'warning');
            return false;
        }
        
        try {
            const AdController = window.Adsgram.init({ blockId: APP_CONFIG.INTERSTITIAL_AD_BLOCK_ID });
            await AdController.show();
        } catch (e) {
            this.showNotification('No Ads', 'No ads available at the moment', 'warning');
            return false;
        }
        
        const reward = currentQuest.reward;
        const originalPower = this.powerBalance;
        this.powerBalance += reward;
        this._dirtyPower = true;
        
        const saved = await this.saveUserData(true);
        
        if (!saved) {
            this.powerBalance = originalPower;
            this._dirtyPower = false;
            this.showNotification('Error', this.t('save_error'), 'error');
            return false;
        }
        
        this.quests.currentLevelQuestIndex++;
        await this.saveQuestsData();
        await this.updateLevelFromPower();
        this.renderMining();
        if (this._earnLoaded) this.renderEarn();
        this.showNotification('Quest Completed!', `+${reward} Power`, 'success');
        return true;
    }
    
    async claimMiningQuest() {
        const currentQuest = this.getCurrentMiningQuest();
        if (!currentQuest) {
            this.showNotification('No Quest', 'No mining quest available', 'warning');
            return false;
        }
        
        if (this.totalMiningStarts < currentQuest.target_starts) {
            this.showNotification('Not Ready', `Start mining ${currentQuest.target_starts} times first`, 'warning');
            return false;
        }
        
        try {
            const AdController = window.Adsgram.init({ blockId: APP_CONFIG.INTERSTITIAL_AD_BLOCK_ID });
            await AdController.show();
        } catch (e) {
            this.showNotification('No Ads', 'No ads available at the moment', 'warning');
            return false;
        }
        
        const reward = currentQuest.reward;
        const originalPower = this.powerBalance;
        this.powerBalance += reward;
        this._dirtyPower = true;
        
        const saved = await this.saveUserData(true);
        
        if (!saved) {
            this.powerBalance = originalPower;
            this._dirtyPower = false;
            this.showNotification('Error', this.t('save_error'), 'error');
            return false;
        }
        
        this.quests.currentMiningQuestIndex++;
        await this.saveQuestsData();
        await this.updateLevelFromPower();
        this.renderMining();
        if (this._earnLoaded) this.renderEarn();
        this.showNotification('Quest Completed!', `+${reward} Power`, 'success');
        return true;
    }
    
    async verifyTonPayment(taskId, expectedAmount, name, url, verification, maxCompletions) {
        const savedTaskId = localStorage.getItem('pending_task_id');
        const searchId = taskId || savedTaskId;
        const walletAddress = APP_CONFIG.TON_WALLET_ADDRESS;
        
        this.showNotification('Payment Verification', 'Checking blockchain for your payment...', 'info');
        
        if (this.pendingPaymentInterval) clearInterval(this.pendingPaymentInterval);
        
        let attempts = 0;
        const maxAttempts = 3;
        
        this.pendingPaymentInterval = setInterval(async () => {
            attempts++;
            this.showNotification('Verifying', `Attempt ${attempts}/${maxAttempts}...`, 'info');
            
            try {
                const response = await fetch(`https://toncenter.com/api/v2/getTransactions?address=${walletAddress}&limit=20`);
                const data = await response.json();
                
                if (!data.ok) {
                    this.showNotification('API Error', 'Failed to fetch transactions. Retrying...', 'warning');
                    return;
                }
                
                if (data.result && data.result.length > 0) {
                    const found = data.result.find(tx => {
                        const msg = tx.in_msg?.message;
                        const value = tx.in_msg?.value;
                        const expectedValue = localStorage.getItem('pending_task_amount') || expectedAmount;
                        return msg === searchId && parseInt(value) >= parseInt(expectedValue);
                    });
                    
                    if (found) {
                        clearInterval(this.pendingPaymentInterval);
                        this.pendingPaymentInterval = null;
                        
                        const savedData = JSON.parse(localStorage.getItem('pending_task_data') || '{}');
                        const finalName = name || savedData.name;
                        const finalUrl = url || savedData.url;
                        const finalVerification = verification || savedData.verification;
                        const finalMaxCompletions = maxCompletions || savedData.maxCompletions;
                        const finalTaskId = searchId;
                        
                        localStorage.removeItem('pending_task_id');
                        localStorage.removeItem('pending_task_amount');
                        localStorage.removeItem('pending_task_data');
                        
                        this.showNotification('Success', 'Payment verified! Creating task...', 'success');
                        await this.createTaskAfterPayment(finalName, finalUrl, finalVerification, finalMaxCompletions, finalTaskId);
                    } else if (attempts >= maxAttempts) {
                        clearInterval(this.pendingPaymentInterval);
                        this.pendingPaymentInterval = null;
                        this.showNotification('Not Found', 'Payment not found. Did you complete the transaction?', 'warning');
                    }
                }
            } catch (error) {
                this.showNotification('Connection Error', 'Cannot connect to blockchain. Retrying...', 'error');
                console.log('Verification error:', error);
            }
        }, 5000);
        
        setTimeout(() => {
            if (this.pendingPaymentInterval) {
                clearInterval(this.pendingPaymentInterval);
                this.pendingPaymentInterval = null;
                this.showNotification('Timeout', 'Verification timeout.', 'warning');
                localStorage.removeItem('pending_task_id');
                localStorage.removeItem('pending_task_amount');
                localStorage.removeItem('pending_task_data');
            }
        }, 100000);
    }

    async createTonConnectPayment(amount, taskId, name, url, verification, maxCompletions) {
        try {
            const amountNano = Math.round(amount * 1000000000);
            const amountNanoStr = amountNano.toString();

            localStorage.setItem('pending_task_amount', amountNanoStr);
            localStorage.setItem('pending_task_data', JSON.stringify({ name, url, verification, maxCompletions }));
            
            const walletAddress = APP_CONFIG.TON_WALLET_ADDRESS;
            const tonkeeperUrl = `https://app.tonkeeper.com/transfer/${walletAddress}?amount=${amountNanoStr}&text=${taskId}`;
            
            this.showNotification('Payment Required', `Please send ${amount} GRAM to complete your task`, 'info');
            
            window.open(tonkeeperUrl, '_blank');
            
            return true;
        } catch (error) {
            this.showNotification('Error', error.message, 'error');
            return false;
        }
    }

    async sendNotification(userId, title, message) {
        try {
            const response = await fetch('/api/send-notification', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ userId, title, message })
            });
            const data = await response.json();
            return data.success;
        } catch (error) {
            console.error('Failed to send notification:', error);
            return false;
        }
    }
    
    async checkReferralReward() {
        if (this.referralRewardGiven) return;
        if (!this.referredBy) return;
        
        const conditionsMet = (this.totalTasksCompleted >= APP_CONFIG.REFERRAL_REQUIRED_TASKS) || 
                              (this.totalMiningStarts >= APP_CONFIG.REFERRAL_REQUIRED_MINES);
        
        if (conditionsMet) {
            this.referralRewardGiven = true;
            const rewardPower = APP_CONFIG.REFERRAL_POWER_REWARD;
            
            try {
                const referrerRef = this.db.ref(`users/${this.referredBy}`);
                const referrerSnap = await referrerRef.once('value');
                if (referrerSnap.exists()) {
                  await referrerRef.child('powerBalance').transaction(current => (current || 0) + rewardPower);
                  await referrerRef.child('referralPower').transaction(current => (current || 0) + rewardPower);
                    
                    await this.sendNotification(
                        this.referredBy, 
                        this.t('referral_bonus'), 
                        `${this.t('referrer_reward_notification')}: ${rewardPower} ${this.t('power')}`
                    );
                }
            } catch (error) {
                console.error('Failed to give referral reward:', error);
            }
            
            await this.db.ref(`users/${this.tgUser.id}`).update({ referralRewardGiven: true });
        }
    }
    
    async getRealServerTime() {
        try {
            const res = await fetch('/api/current-time');
            const data = await res.json();
            return data.serverTime;
        } catch (error) {
            console.warn('Failed to get server time:', error);
            return Date.now();
        }
    }
    
    async syncServerTime() {
        const serverTime = await this.getRealServerTime();
        this.serverTimeOffset = serverTime - Date.now();
        return serverTime;
    }
    
    getCurrentTime() {
        return Date.now() + this.serverTimeOffset;
    }
    
    getMiningProgressPercent() {
        if (!this.miningActive || !this.miningStartTime || !this.miningEndTime) return 0;
        const totalDuration = this.miningSessionHours * 3600000;
        const elapsed = Math.min(totalDuration, this.getCurrentTime() - this.miningStartTime);
        return (elapsed / totalDuration) * 100;
    }
    
    updateMiningRing() {
        const percent = this.getMiningProgressPercent();
        const circle = document.querySelector('.progress-ring-circle');
        if (circle) {
            const radius = 70;
            const circumference = 2 * Math.PI * radius;
            const offset = circumference - (percent / 100) * circumference;
            circle.style.strokeDashoffset = offset;
        }
        
        const miningIcon = document.querySelector('.mining-icon');
        if (miningIcon) {
            if (this.miningActive) {
                miningIcon.classList.add('pulse-logo');
            } else {
                miningIcon.classList.remove('pulse-logo');
            }
        }
    }
    
    async startMining() {
        this.miningActive = true;
        const serverTime = await this.syncServerTime();
        this.miningStartTime = serverTime;
        this.miningEndTime = serverTime + (this.miningSessionHours * 3600000);
        this.pendingTonReward = 0;
        this._dirtyMining = true;
        
        this.totalMiningStarts++;
        await this.db.ref(`users/${this.tgUser.id}`).update({ totalMiningStarts: this.totalMiningStarts });
        
        if (!this.hasStartedMining && this.db && this.tgUser) {
            this.hasStartedMining = true;
            await this.db.ref(`users/${this.tgUser.id}`).update({ hasStartedMining: true });
        }
        
        const saved = await this.saveUserData(true);
        if (!saved) {
            this.miningActive = false;
            this.miningStartTime = null;
            this.miningEndTime = null;
            this.showNotification('Error', this.t('save_error'), 'error');
            return;
        }
        
        this.renderMining();
        this.startMiningLoop();
        this.showNotification(this.t('start_mining'), 'Your rig is now mining GRAM', 'success');
        
        await this.checkReferralReward();
        if (this._earnLoaded) this.renderEarn();
    }
    
    async stopMining() {
        if (!this.miningActive) return;
        
        const currentTime = this.getCurrentTime();
        const elapsedSeconds = (currentTime - this.miningStartTime) / 1000;
        const elapsedHours = Math.min(elapsedSeconds / 3600, this.miningSessionHours);
        
        this.pendingTonReward = this.calculateRewardForHours(elapsedHours);
        this.miningActive = false;
        this.miningStartTime = null;
        this.miningEndTime = null;
        this._dirtyMining = true;
        
        await this.saveUserData(true);
        this.renderMining();
        if (this.miningInterval) clearInterval(this.miningInterval);
        if (this.uiUpdateInterval) clearInterval(this.uiUpdateInterval);
    }
    
    async claimMiningRewards() {
        if (this.miningActive) {
            this.showNotification('Error', 'Complete mining session first!', 'error');
            return;
        }
        if (this.pendingTonReward <= 0) {
            this.showNotification('Error', 'No rewards to claim', 'error');
            return;
        }
        
        await this.syncServerTime();
        
        try {
            const AdController = window.Adsgram.init({ blockId: APP_CONFIG.INTERSTITIAL_AD_BLOCK_ID });
            await AdController.show();
        } catch (result) {
            this.showNotification('No Ads', 'No ads available at the moment', 'warning');
            return;
        }
        
        const earnedAmount = this.pendingTonReward;
        const originalTon = this.tonBalance;
        this.tonBalance += earnedAmount;
        this._dirtyTon = true;
        this.pendingTonReward = 0;
        this._dirtyMining = true;
        
        const saved = await this.saveUserData(true);
        
        if (!saved) {
            this.tonBalance = originalTon;
            this.pendingTonReward = earnedAmount;
            this._dirtyTon = false;
            this._dirtyMining = true;
            this.showNotification('Error', this.t('save_error'), 'error');
            return;
        }
        
        this.updateLevelFromPower();
        this.renderMining();
        this.showNotification('Rewards Claimed!', `${earnedAmount.toFixed(8)} GRAM added to balance`, 'success');
    }
    
    startMiningLoop() {
        if (this.miningInterval) clearInterval(this.miningInterval);
        if (this.uiUpdateInterval) clearInterval(this.uiUpdateInterval);
        
        this.miningInterval = setInterval(async () => {
            if (!this.miningActive) return;
            const currentTime = this.getCurrentTime();
            if (this.miningEndTime && currentTime >= this.miningEndTime) {
                await this.stopMining();
            }
            this.updateMiningRing();
        }, 60000);
        
        this.uiUpdateInterval = setInterval(() => {
            if (this.miningActive) {
                this.updateMiningTimerDisplay();
                this.updateMiningRing();
            }
        }, 1000);
    }
    
    updateMiningTimerDisplay() {
        if (!this.miningEndTime) return;
        
        const currentTime = this.getCurrentTime();
        const remaining = Math.max(0, (this.miningEndTime - currentTime) / 1000);
        
        if (remaining <= 0 && this.miningActive) {
            this.stopMining();
            this.renderMining();
            return;
        }
        
        const hours = Math.floor(remaining / 3600);
        const minutes = Math.floor((remaining % 3600) / 60);
        const seconds = Math.floor(remaining % 60);
        const timerEl = document.querySelector('.mining-timer');
        if (timerEl) {
            timerEl.innerHTML = `<i class="fas fa-hourglass-half"></i> ${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
        }
    }
    
    async updateAdCooldownDisplay() {
        // Removed ad cooldown for mining
    }
    
    startCooldownTimer() {
        // Removed
    }
    
    async watchRewardAd() {
        // Removed
    }
    
    resetTaskButton(btnElement, type, text) {
        if (btnElement && btnElement.parentNode) {
            btnElement.innerHTML = text;
            btnElement.disabled = false;
            btnElement.classList.remove('check', 'start', 'done');
            btnElement.classList.add(type);
        }
    }
    
    async completeTask(taskId, rewardPower, url, verification, btnElement, isMainTask = false, isSocialTask = false, taskData = null) {
        if (this.userCompletedTasks.has(taskId)) return false;
        
        let verificationSucceeded = false;
        
        if (verification) {
            const chatId = this.extractChatId(url);
            if (chatId) {
                const isBotAdmin = await this.checkBotAdmin(chatId);
                if (!isBotAdmin) {
                    verificationSucceeded = true;
                } else {
                    const isMember = await this.checkMembership(chatId);
                    if (isMember) {
                        verificationSucceeded = true;
                    } else {
                        this.showNotification('Join Required', 'Please join the channel first', 'warning');
                        this.resetTaskButton(btnElement, 'start', 'Start');
                        this.isTaskRunning = false;
                        this.enableAllTaskButtons();
                        return false;
                    }
                }
            } else {
                verificationSucceeded = true;
            }
        } else {
            verificationSucceeded = true;
        }
        
        if (!verificationSucceeded) {
            this.resetTaskButton(btnElement, 'start', 'Start');
            this.isTaskRunning = false;
            this.enableAllTaskButtons();
            return false;
        }
        
        this.userCompletedTasks.add(taskId);
        if (isMainTask) {
            this.userCompletedMainTasks.add(taskId);
        }
        if (isSocialTask && taskData) {
            this.userCompletedSocialTasks.set(taskId, this.getCurrentTime());
            this.totalTasksCompleted++;
            await this.db.ref(`users/${this.tgUser.id}`).update({ totalTasksCompleted: this.totalTasksCompleted });
            
            const taskRef = this.db.ref(`userTasks/${taskData.owner}/${taskId}`);
            const taskSnap = await taskRef.once('value');
            if (taskSnap.exists()) {
                const currentTotal = taskSnap.val().total || 0;
                await taskRef.update({ total: currentTotal + 1 });
            }
            
            this.scheduleTaskRemoval(taskId);
        }
        
        const originalPower = this.powerBalance;
        this.powerBalance += rewardPower;
        this._dirtyPower = true;
        
        const saved = await this.saveUserData(true);
        
        if (!saved) {
            this.userCompletedTasks.delete(taskId);
            if (isMainTask) this.userCompletedMainTasks.delete(taskId);
            if (isSocialTask) this.userCompletedSocialTasks.delete(taskId);
            this.powerBalance = originalPower;
            this._dirtyPower = false;
            this.showNotification('Error', this.t('save_error'), 'error');
            this.resetTaskButton(btnElement, 'claim', 'Claim');
            this.isTaskRunning = false;
            this.enableAllTaskButtons();
            return false;
        }
        
        if (this.db) {
            try {
                if (isMainTask) {
                    await this.db.ref(`users/${this.tgUser.id}/completedMainTasks`).set(Array.from(this.userCompletedMainTasks));
                }
                await this.db.ref(`users/${this.tgUser.id}/completedTasks`).set(Array.from(this.userCompletedTasks));
                if (isSocialTask) {
                    const socialTasksObj = {};
                    this.userCompletedSocialTasks.forEach((value, key) => {
                        socialTasksObj[key] = value;
                    });
                    await this.db.ref(`users/${this.tgUser.id}/completedSocialTasks`).set(socialTasksObj);
                }
                localStorage.setItem(`completed_${this.tgUser.id}`, JSON.stringify(Array.from(this.userCompletedTasks)));
            } catch (error) {
                console.error('Failed to save task completion to DB:', error);
            }
        }
        
        await this.updateLevelFromPower();
        this.renderMining();
        
        if (this._earnLoaded) {
            await this.loadTasks();
            this.renderEarn();
        }
        
        this.showNotification('Task Completed!', `${rewardPower} ${this.t('power')}`, 'success');
        this.vibrate('success');
        this.isTaskRunning = false;
        this.enableAllTaskButtons();
        
        await this.checkReferralReward();
        return true;
    }
    
    scheduleTaskRemoval(taskId) {
        if (this.taskCompletionTimers.has(taskId)) {
            clearTimeout(this.taskCompletionTimers.get(taskId));
        }
        
        const timer = setTimeout(() => {
            this.userCompletedTasks.delete(taskId);
            this.userCompletedSocialTasks.delete(taskId);
            localStorage.setItem(`completed_${this.tgUser.id}`, JSON.stringify(Array.from(this.userCompletedTasks)));
            if (this.db) {
                this.db.ref(`users/${this.tgUser.id}/completedTasks`).set(Array.from(this.userCompletedTasks));
                const socialTasksObj = {};
                this.userCompletedSocialTasks.forEach((value, key) => {
                    socialTasksObj[key] = value;
                });
                this.db.ref(`users/${this.tgUser.id}/completedSocialTasks`).set(socialTasksObj);
            }
            if (this._earnLoaded) this.renderEarn();
        }, 48 * 60 * 60 * 1000);
        
        this.taskCompletionTimers.set(taskId, timer);
    }
    
    async checkBotAdmin(channel) {
        const cacheKey = `bot_admin_${channel}`;
        const cached = this.membershipCache.get(cacheKey);
        const now = Date.now();
        
        if (cached && (now - cached.timestamp) < 3600000) {
            return cached.isAdmin;
        }
        
        try {
            const res = await fetch('/api/bot-actions', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ action: 'check_bot_admin', channel: `@${channel}` })
            });
            const data = await res.json();
            const isAdmin = data.isAdmin === true;
            this.membershipCache.set(cacheKey, { isAdmin, timestamp: now });
            return isAdmin;
        } catch(e) {
            return false;
        }
    }
    
    async checkBotAdminByUrl(taskUrl) {
        try {
            const res = await fetch('/api/bot-actions', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ action: 'check_bot_admin_by_url', taskUrl })
            });
            const data = await res.json();
            return data;
        } catch(e) {
            return { isAdmin: false, error: e.message };
        }
    }
    
    disableAllTaskButtons() {
        document.querySelectorAll('.task-btn.start, .task-btn.check').forEach(btn => {
            if (!btn.classList.contains('done')) {
                btn.disabled = true;
                btn.classList.add('disabled-btn');
            }
        });
    }
    
    enableAllTaskButtons() {
        document.querySelectorAll('.task-btn.start, .task-btn.check').forEach(btn => {
            if (!btn.classList.contains('done')) {
                btn.disabled = false;
                btn.classList.remove('disabled-btn');
            }
        });
    }
    
    async addSocialTask(name, url, verification, maxCompletions) {
        if (!name || !url) {
            this.showNotification('Error', this.t('all_fields_required'), 'error');
            return false;
        }
        
        if (!verification || verification === '') {
            verification = 'false';
        }
        
        if (!maxCompletions) {
            this.showNotification('Error', this.t('choose_completions'), 'error');
            return false;
        }
    
        const taskId = Date.now().toString();
        localStorage.setItem('pending_task_id', taskId);
        
        const price = (APP_CONFIG.TON_PRICE_PER_100 * (maxCompletions / 100));
        
        try {
            if (verification === 'true') {
                const checkResult = await this.checkBotAdminByUrl(url);
                if (!checkResult.isAdmin) {
                    this.showNotification('Error', 'Bot must be admin in the channel for verification', 'error');
                    return false;
                }
            }
            
            const success = await this.createTonConnectPayment(price, taskId, name, url, verification, maxCompletions);
            if (!success) return;
            
            return true;
        } catch (error) {
            console.error('Add task error:', error);
            this.showNotification('Error', 'Failed to add task', 'error');
            return false;
        }
    }
    
    async createTaskAfterPayment(name, url, verification, maxCompletions, taskId) {
        const taskData = {
            name: name,
            url: url,
            category: 'social',
            verification: verification === 'true',
            max: parseInt(maxCompletions),
            status: 'pending',
            owner: this.tgUser.id,
            createdAt: this.getCurrentTime(),
            reward: APP_CONFIG.TASK_REWARD,
            total: 0
        };
        
        await this.db.ref(`userTasks/${this.tgUser.id}/${taskId}`).set(taskData);
        this.showNotification('Success', 'Task added successfully', 'success');
        document.getElementById('add-task-modal').style.display = 'none';
        await this.loadUserTasks();
        this.renderAddTaskModal();
    }
    
    async loadUserTasks() {
        if (!this.db) return;
        try {
            const snap = await this.db.ref(`userTasks/${this.tgUser.id}`).once('value');
            this.userTasks = [];
            if (snap.exists()) {
                snap.forEach(child => {
                    this.userTasks.push({ id: child.key, ...child.val() });
                });
            }
        } catch (error) {
            console.warn('Failed to load user tasks:', error);
            this.userTasks = [];
        }
    }
    
    async loadActiveSocialTasks() {
        if (!this.db) return [];
        const activeTasks = [];
        try {
            const usersSnap = await this.db.ref('userTasks').once('value');
            if (usersSnap.exists()) {
                usersSnap.forEach(userTasks => {
                    userTasks.forEach(taskSnap => {
                        const task = { id: taskSnap.key, ...taskSnap.val() };
                        if (task.status === 'active' && task.total < task.max) {
                            const completedTime = this.userCompletedSocialTasks.get(task.id);
                            if (!completedTime || (this.getCurrentTime() - completedTime) >= 48 * 60 * 60 * 1000) {
                                activeTasks.push(task);
                            }
                        }
                    });
                });
            }
        } catch (error) {
            console.warn('Failed to load active social tasks:', error);
        }
        return activeTasks;
    }
    
    async applyPromoCode(code) {
        if (!this.db) return false;
        if (this.userCompletedPromoCodes.has(code)) {
            this.showNotification('Already Used', 'Code already redeemed', 'warning');
            return false;
        }
        const codeSnap = await this.db.ref(`promoCodes/${code}`).once('value');
        if (!codeSnap.exists()) {
            this.showNotification('Invalid Code', 'Promo code not found', 'error');
            return false;
        }
        const promoData = codeSnap.val();
        
        const usedRef = this.db.ref(`usedPromoCodes/${this.tgUser.id}/${code}`);
        const usedSnap = await usedRef.once('value');
        if (usedSnap.exists()) {
            this.showNotification('Already Used', 'Code already redeemed', 'warning');
            return false;
        }
        
        const totalUses = promoData.total || 0;
        const maxUses = promoData.maxUses;
        if (maxUses && totalUses >= maxUses) {
            this.showNotification('Expired', 'Promo code has reached maximum uses', 'warning');
            return false;
        }
        
        try {
            const AdController = window.Adsgram.init({ blockId: APP_CONFIG.INTERSTITIAL_AD_BLOCK_ID });
            await AdController.show();
        } catch (result) {
            this.showNotification('No Ads', 'No ads available at the moment', 'warning');
            return false;
        }
        
        await usedRef.set(true);
        this.userCompletedPromoCodes.add(code);
        
        let originalPower = this.powerBalance;
        let originalTon = this.tonBalance;
        
        if (promoData.rewardType === 'power') {
            this.powerBalance += promoData.reward;
            this._dirtyPower = true;
            await this.updateLevelFromPower();
            
            const saved = await this.saveUserData(true);
            if (!saved) {
                this.powerBalance = originalPower;
                this._dirtyPower = false;
                this.showNotification('Error', this.t('save_error'), 'error');
                return false;
            }
            
            this.showNotification('Code Applied!', `You received ${this.formatNumber(promoData.reward)} Power`, 'success');
        } else if (promoData.rewardType === 'ton') {
            this.tonBalance += promoData.reward;
            this._dirtyTon = true;
            
            const saved = await this.saveUserData(true);
            if (!saved) {
                this.tonBalance = originalTon;
                this._dirtyTon = false;
                this.showNotification('Error', this.t('save_error'), 'error');
                return false;
            }
            
            this.showNotification('Code Applied!', `You received ${promoData.reward} GRAM`, 'success');
        } else {
            this.showNotification('Error', 'Invalid reward type', 'error');
            return false;
        }
        
        const promoRef = this.db.ref(`promoCodes/${code}/total`);
        const currentTotal = (await promoRef.once('value')).val() || 0;
        await promoRef.set(currentTotal + 1);
        
        this.renderMining();
        this.renderEarn();
        return true;
    }
    
    async withdraw(amount, wallet) {
        if (this._withdrawLock) {
            this.showNotification('Please wait', 'You can withdraw again after 10 seconds', 'warning');
            return false;
        }
        
        if (!wallet || wallet.length < 20) {
            this.showNotification('Error', 'Invalid wallet address', 'error');
            return false;
        }
        
        const totalRequired = amount + (APP_CONFIG.WITHDRAWAL_FEES > 0 ? APP_CONFIG.WITHDRAWAL_FEES : 0);
        
        if (amount < APP_CONFIG.MINIMUM_WITHDRAW || totalRequired > this.tonBalance) {
            this.showNotification('Error', 'Invalid amount or insufficient balance (including fees)', 'error');
            return false;
        }
        
        try {
            const AdController = window.Adsgram.init({ blockId: APP_CONFIG.INTERSTITIAL_AD_BLOCK_ID });
            await AdController.show();
        } catch (result) {
            this.showNotification('No Ads', 'No ads available at the moment', 'warning');
            return false;
        }
        
        this._withdrawLock = true;
        setTimeout(() => { this._withdrawLock = false; }, 10000);
        
        const actualDeduct = amount + (APP_CONFIG.WITHDRAWAL_FEES > 0 ? APP_CONFIG.WITHDRAWAL_FEES : 0);
        const originalBalance = this.tonBalance;
        this.tonBalance -= actualDeduct;
        this._dirtyTon = true;
        
        const saved = await this.saveUserData(true);
        
        if (!saved) {
            this.tonBalance = originalBalance;
            this._dirtyTon = false;
            this.showNotification('Error', this.t('save_error'), 'error');
            return false;
        }
        
        const withdrawal = {
            id: Date.now(),
            amount: amount,
            fees: APP_CONFIG.WITHDRAWAL_FEES > 0 ? APP_CONFIG.WITHDRAWAL_FEES : 0,
            wallet: wallet,
            status: 'pending',
            timestamp: this.getCurrentTime()
        };
        
        if (this.db) {
            try {
                await this.db.ref(`withdrawals/${this.tgUser.id}/${withdrawal.id}`).set(withdrawal);
                await this.db.ref('Status/totalWithdrawals').transaction(current => (current || 0) + 1);
                await this.db.ref('Status/totalTonPaid').transaction(current => (current || 0) + amount);
                
                const userWithdrawalsRef = this.db.ref(`withdrawals/${this.tgUser.id}`);
                const snapshot = await userWithdrawalsRef.once('value');
                if (snapshot.exists()) {
                    const allWithdrawals = [];
                    snapshot.forEach(child => {
                        allWithdrawals.push({ id: child.key, ...child.val() });
                    });
                    allWithdrawals.sort((a, b) => b.timestamp - a.timestamp);
                    if (allWithdrawals.length > 5) {
                        const toDelete = allWithdrawals.slice(5);
                        for (const old of toDelete) {
                            await userWithdrawalsRef.child(old.id).remove();
                        }
                    }
                }
            } catch (error) {
                console.error('Withdrawal save failed:', error);
                this.tonBalance += actualDeduct;
                this._dirtyTon = true;
                await this.saveUserData(true);
                this.showNotification('Error', 'Failed to submit withdrawal', 'error');
                return false;
            }
        }
        
        this.withdrawals.unshift(withdrawal);
        if (this.withdrawals.length > 5) this.withdrawals = this.withdrawals.slice(0, 5);
        localStorage.setItem(`withdrawals_${this.tgUser.id}`, JSON.stringify(this.withdrawals));
        if (this._withdrawLoaded) {
            this.renderWithdraw();
        }
        this.showNotification('Withdrawn!', `${amount.toFixed(5)} GRAM requested`, 'success');
        return true;
    }
    
    extractChatId(url) {
        const match = url.match(/t\.me\/([^\/\?]+)/);
        return match ? match[1] : null;
    }
    
    async checkMembership(channel) {
        const cacheKey = `membership_${channel}_${this.tgUser.id}`;
        const cached = this.membershipCache.get(cacheKey);
        const now = Date.now();
        
        if (cached && (now - cached.timestamp) < 1800000) {
            return cached.isMember;
        }
        
        try {
            const res = await fetch('/api/bot-actions', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ action: 'check_channel', channel: `@${channel}`, userId: this.tgUser.id })
            });
            const data = await res.json();
            
            if (data.error === 'bot_not_admin') {
                return true;
            }
            
            const isMember = data.isMember === true;
            this.membershipCache.set(cacheKey, { isMember, timestamp: now });
            localStorage.setItem(cacheKey, JSON.stringify({ isMember, timestamp: now }));
            return isMember;
        } catch(e) {
            return false;
        }
    }
    
    async generateUniqueDeviceId() {
        const userAgent = navigator.userAgent;
        const screen = `${window.screen.width}x${window.screen.height}x${window.screen.colorDepth}`;
        const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;
        const platform = navigator.platform;
        const language = navigator.language;
        
        let seed = `${userAgent}|${screen}|${timezone}|${platform}|${language}`;
        
        const cryptoHash = await crypto.subtle.digest('SHA-256', new TextEncoder().encode(seed));
        const hashArray = Array.from(new Uint8Array(cryptoHash));
        const hexHash = hashArray.map(b => b.toString(16).padStart(2, '0')).join('').substring(0, 32);
        
        return `dev_${hexHash}`;
    }
    
    async checkDevice() {
        this.deviceId = await this.generateUniqueDeviceId();
        const savedDevice = localStorage.getItem('device_owner');
        
        if (savedDevice && savedDevice !== this.tgUser.id.toString()) {
            this.showNotification('Device Locked', 'Multiple accounts not allowed', 'error');
            setTimeout(() => window.Telegram?.WebApp?.close(), 3000);
            throw new Error('Device already registered with different user');
        }
        
        localStorage.setItem('device_owner', this.tgUser.id);
        return null;
    }
    
    async checkUserState() {
        if (!this.db || !this.tgUser) return;
        try {
            const stateSnap = await this.db.ref(`users/${this.tgUser.id}/state`).once('value');
            this.userState = stateSnap.val();
            
            if (this.userState === 'ban') {
                const banMessage = document.createElement('div');
                banMessage.className = 'ban-message';
                banMessage.innerHTML = `
                    <i class="fas fa-ban"></i>
                    <h2>Account Banned</h2>
                    <p>${this.t('ban_message')}</p>
                    <button onclick="window.Telegram.WebApp.close()" style="margin-top:20px;padding:12px 24px;background:#6C63FF;border:none;border-radius:40px;color:white">Close</button>
                `;
                document.getElementById('app').innerHTML = '';
                document.getElementById('app').appendChild(banMessage);
                document.getElementById('app').style.display = 'block';
                document.getElementById('app-loader').style.display = 'none';
                throw new Error('User banned');
            }
        } catch (error) {
            if (error.message === 'User banned') throw error;
            console.warn('Failed to check user state:', error);
        }
    }
    
    vibrate(type) {
        if (!this.vibrationEnabled) return;
        if (window.Telegram?.WebApp?.HapticFeedback) {
            if (type === 'success') window.Telegram.WebApp.HapticFeedback.notificationOccurred('success');
            else if (type === 'error') window.Telegram.WebApp.HapticFeedback.notificationOccurred('error');
            else window.Telegram.WebApp.HapticFeedback.impactOccurred('light');
        }
    }
    
    showNotification(title, message, type) {
        this.vibrate(type);
        const el = document.createElement('div');
        el.className = `notif ${type}`;
        const icon = type === 'success' ? 'fa-check-circle' : (type === 'error' ? 'fa-exclamation-circle' : 'fa-info-circle');
        el.innerHTML = `<i class="fas ${icon}"></i><div><strong>${title}</strong><br><small>${message}</small></div>`;
        document.body.appendChild(el);
        setTimeout(() => el.remove(), 3000);
    }
    
    async showInterstitialAd() {
        try {
            const AdController = window.Adsgram.init({ blockId: APP_CONFIG.INTERSTITIAL_AD_BLOCK_ID });
            await AdController.show();
            return true;
        } catch(e) {
            console.warn('Interstitial ad failed:', e);
            return false;
        }
    }
    
    async updateFirebaseUid() {
        if (!this.db || !this.tgUser) return;
        const userRef = this.db.ref(`users/${this.tgUser.id}`);
        const snapshot = await userRef.once('value');
        
        if (snapshot.exists()) {
            const authUid = this.auth.currentUser.uid;
            await userRef.update({ firebaseUid: authUid });
        }
    }
    
    scheduleSave() {
        if (this._saveTimeout) clearTimeout(this._saveTimeout);
        this._saveTimeout = setTimeout(() => {
            this.saveUserData(false);
        }, 30000);
    }
    
    async saveUserData(immediate = false) {
        if (!this.db || !this.tgUser) return false;
        
        if (this._isSaving) {
            if (immediate) {
                let waited = 0;
                while (this._isSaving && waited < 3000) {
                    await new Promise(resolve => setTimeout(resolve, 50));
                    waited += 50;
                }
                if (this._isSaving) return false;
            } else {
                return true;
            }
        }
        
        this._isSaving = true;
        
        try {
            const updates = {};
            if (this._dirtyPower) updates.powerBalance = this.powerBalance;
            if (this._dirtyTon) updates.tonBalance = this.tonBalance;
            if (this._dirtyMining) {
                updates.miningActive = this.miningActive;
                updates.miningStartTime = this.miningStartTime;
                updates.miningEndTime = this.miningEndTime;
                updates.pendingTonReward = this.pendingTonReward;
            }
            
            if (Object.keys(updates).length === 0) {
                this._isSaving = false;
                return true;
            }
            
            await this.db.ref(`users/${this.tgUser.id}`).update(updates);
            
            const userDataForCache = {
                powerBalance: this.powerBalance,
                tonBalance: this.tonBalance,
                userLevel: this.userLevel,
                miningActive: this.miningActive,
                miningStartTime: this.miningStartTime,
                miningEndTime: this.miningEndTime,
                pendingTonReward: this.pendingTonReward,
                totalReferrals: this.totalReferrals,
                referralPower: this.referralPower
            };
            localStorage.setItem(`user_${this.tgUser.id}`, JSON.stringify(userDataForCache));
            
            this._dirtyPower = false;
            this._dirtyTon = false;
            this._dirtyMining = false;
            
            if (this._saveTimeout) clearTimeout(this._saveTimeout);
            
            return true;
        } catch (error) {
            console.warn('Failed to save user data:', error);
            return false;
        } finally {
            this._isSaving = false;
        }
    }
    
    async forceCreateUserData() {
        const startParam = this.tg.initDataUnsafe?.start_param;
        let referredBy = (startParam && !isNaN(startParam)) ? parseInt(startParam) : null;
        if (referredBy === this.tgUser.id || referredBy === this.deviceOwnerId) referredBy = null;
        
        const userData = {
            id: this.tgUser.id,
            firebaseUid: this.auth.currentUser.uid,
            username: this.tgUser.username || '',
            firstName: this.tgUser.first_name || 'User',
            photoUrl: this.tgUser.photo_url || APP_CONFIG.DEFAULT_USER_AVATAR,
            referredBy: referredBy,
            createdAt: await this.syncServerTime(),
            powerBalance: 1000,
            tonBalance: 0,
            level: 1,
            totalTasksCompleted: 0,
            totalMiningStarts: 0,
            referralRewardGiven: false,
            state: 'active',
            quests: {
                welcomeBonusClaimed: false,
                currentLevelQuestIndex: 0,
                currentMiningQuestIndex: 0
            },
            dailyBonus: {
                claimed: false,
                date: null
            }
        };
        
        await this.db.ref(`users/${this.tgUser.id}`).set(userData);
        this.quests = userData.quests;
        this.dailyBonusClaimed = false;
        this.dailyBonusDate = null;
        
        const totalUsersRef = this.db.ref('Status/totalUsers');
        const currentTotal = (await totalUsersRef.once('value')).val() || 0;
        await totalUsersRef.set(currentTotal + 1);
        
        if (referredBy && referredBy !== this.tgUser.id) {
            const referrerRef = this.db.ref(`users/${referredBy}`);
            const referrerSnap = await referrerRef.once('value');
            if (referrerSnap.exists()) {
                const currentTotalRef = referrerSnap.val().totalReferrals ?? 0;
                await referrerRef.update({ totalReferrals: currentTotalRef + 1 });
                await this.sendNotification(referredBy, this.t('new_referral'), `${this.tgUser.first_name} joined using your link`);
            }
        }
        
        this.powerBalance = 1000;
        this.tonBalance = 0;
        this.userLevel = 1;
        this.hasStartedMining = false;
        this.miningActive = false;
        this.miningStartTime = null;
        this.miningEndTime = null;
        this.pendingTonReward = 0;
        this.totalTasksCompleted = 0;
        this.totalMiningStarts = 0;
        this.referralRewardGiven = false;
        
        const nameSpan = document.getElementById('user-name');
        if (nameSpan) nameSpan.innerText = this.truncateName(this.tgUser.first_name || 'User');
        const levelSpan = document.getElementById('user-level');
        if (levelSpan) levelSpan.innerText = this.userLevel;
        const levelBadge = document.getElementById('user-level-badge');
        if (levelBadge) levelBadge.innerText = this.userLevel;
        const photoImg = document.getElementById('user-photo');
        if (photoImg) photoImg.src = this.tgUser.photo_url || APP_CONFIG.DEFAULT_USER_AVATAR;
        
        this.showNotification('Welcome!', '1000 Power Added', 'success');
    }
    
    async initFirebase() {
        return new Promise((resolve, reject) => {
            const config = {
                apiKey: "AIzaSyDeFeeuLHk1fjGNAt-niKS-pZeSzXazO2s",
                authDomain: "zentrix-bro.firebaseapp.com",
                databaseURL: "https://zentrix-bro-default-rtdb.europe-west1.firebasedatabase.app",
                projectId: "zentrix-bro",
                storageBucket: "zentrix-bro.firebasestorage.app",
                messagingSenderId: "891224621190",
                appId: "1:891224621190:web:d1850e5d23f97630105107",
                measurementId: "G-YS336CHR83"
            };
            
            try {
                let app;
                try { app = firebase.initializeApp(config); } catch(e) { app = firebase.app(); }
                this.db = app.database();
                this.auth = app.auth();
                
                this.auth.signInAnonymously()
                    .then(() => resolve())
                    .catch((error) => reject(error));
            } catch (error) {
                reject(error);
            }
        });
    }
    
    async loadUserData() {
        if (this._userDataLoaded) return;
        
        const cachedUser = localStorage.getItem(`user_${this.tgUser.id}`);
        if (cachedUser) {
            const data = JSON.parse(cachedUser);
            this.powerBalance = data.powerBalance ?? 0;
            this.tonBalance = data.tonBalance ?? 0;
            this.userLevel = data.userLevel ?? 1;
            this.miningActive = data.miningActive ?? false;
            this.miningStartTime = data.miningStartTime ?? null;
            this.miningEndTime = data.miningEndTime ?? null;
            this.pendingTonReward = data.pendingTonReward ?? 0;
            this.totalReferrals = data.totalReferrals ?? 0;
            this.referralPower = data.referralPower ?? 0;
        }
        
        try {
            const userRef = this.db.ref(`users/${this.tgUser.id}`);
            const snap = await userRef.once('value');
            if (snap.exists()) {
                const d = snap.val();
                this.powerBalance = d.powerBalance ?? this.powerBalance;
                this.tonBalance = d.tonBalance ?? this.tonBalance;
                this.userLevel = d.level ?? this.userLevel;
                this.hasStartedMining = d.hasStartedMining ?? false;
                this.miningActive = d.miningActive ?? this.miningActive;
                this.miningStartTime = d.miningStartTime ?? this.miningStartTime;
                this.miningEndTime = d.miningEndTime ?? this.miningEndTime;
                this.pendingTonReward = d.pendingTonReward ?? this.pendingTonReward;
                this.referredBy = d.referredBy ?? null;
                this.totalReferrals = d.totalReferrals ?? this.totalReferrals;
                this.referralPower = d.referralPower ?? this.referralPower;
                this.totalTasksCompleted = d.totalTasksCompleted ?? 0;
                this.totalMiningStarts = d.totalMiningStarts ?? 0;
                this.referralRewardGiven = d.referralRewardGiven ?? false;
                this.userState = d.state ?? 'active';
                if (d.quests) this.quests = d.quests;
                if (d.dailyBonus) {
                    this.dailyBonusClaimed = d.dailyBonus.claimed || false;
                    this.dailyBonusDate = d.dailyBonus.date || null;
                } else {
                    this.dailyBonusClaimed = false;
                    this.dailyBonusDate = null;
                }
                
                const userDataForCache = {
                    powerBalance: this.powerBalance,
                    tonBalance: this.tonBalance,
                    userLevel: this.userLevel,
                    miningActive: this.miningActive,
                    miningStartTime: this.miningStartTime,
                    miningEndTime: this.miningEndTime,
                    pendingTonReward: this.pendingTonReward,
                    totalReferrals: this.totalReferrals,
                    referralPower: this.referralPower
                };
                localStorage.setItem(`user_${this.tgUser.id}`, JSON.stringify(userDataForCache));
            } else {
                await this.forceCreateUserData();
                const userRef2 = this.db.ref(`users/${this.tgUser.id}`);
                const snap2 = await userRef2.once('value');
                if (snap2.exists()) {
                    this.referredBy = snap2.val().referredBy ?? null;
                    if (snap2.val().quests) this.quests = snap2.val().quests;
                    if (snap2.val().dailyBonus) {
                        this.dailyBonusClaimed = snap2.val().dailyBonus.claimed || false;
                        this.dailyBonusDate = snap2.val().dailyBonus.date || null;
                    }
                }
            }
        } catch (error) {
            console.error('loadUserData error:', error);
            await this.forceCreateUserData();
        }
        
        this._userDataLoaded = true;
        
        const nameSpan = document.getElementById('user-name');
        if (nameSpan) nameSpan.innerText = this.truncateName(this.tgUser.first_name || 'User');
        const levelSpan = document.getElementById('user-level');
        if (levelSpan) levelSpan.innerText = this.userLevel;
        const levelBadge = document.getElementById('user-level-badge');
        if (levelBadge) levelBadge.innerText = this.userLevel;
        const photoImg = document.getElementById('user-photo');
        if (photoImg) photoImg.src = this.tgUser.photo_url || APP_CONFIG.DEFAULT_USER_AVATAR;
        
        await this.loadDailyTaskStatus();
        await this.loadCompletedSocialTasks();
        this.updateHeaderBalances();
    }
    
    async loadCompletedSocialTasks() {
        if (!this.db) return;
        try {
            const snap = await this.db.ref(`users/${this.tgUser.id}/completedSocialTasks`).once('value');
            if (snap.exists()) {
                const tasksObj = snap.val();
                this.userCompletedSocialTasks = new Map();
                for (const [key, value] of Object.entries(tasksObj)) {
                    this.userCompletedSocialTasks.set(key, value);
                }
            } else {
                this.userCompletedSocialTasks = new Map();
            }
        } catch (error) {
            console.warn('Failed to load completed social tasks:', error);
            this.userCompletedSocialTasks = new Map();
        }
    }
    
    async loadDailyTaskStatus() {
        const today = this.getTodayUTC();
        const stored = localStorage.getItem(`daily_tasks_${this.tgUser?.id}`);
        if (stored) {
            const data = JSON.parse(stored);
            if (data.date === today) {
                this.dailyTasksCompleted = new Map(Object.entries(data.completed || {}));
                return;
            }
        }
        this.dailyTasksCompleted = new Map();
    }
    
    saveDailyTaskStatus() {
        const today = this.getTodayUTC();
        const completedObj = {};
        this.dailyTasksCompleted.forEach((value, key) => {
            completedObj[key] = value;
        });
        const data = {
            date: today,
            completed: completedObj
        };
        localStorage.setItem(`daily_tasks_${this.tgUser?.id}`, JSON.stringify(data));
    }
    
    getTodayUTC() {
        const now = new Date();
        return new Date(Date.UTC(now.getUTCFullYear(), now.getUTCMonth(), now.getUTCDate())).toISOString().split('T')[0];
    }
    
    getDailyResetTimeUTC() {
        const now = new Date();
        const tomorrow = new Date(Date.UTC(now.getUTCFullYear(), now.getUTCMonth(), now.getUTCDate() + 1, 0, 0, 0));
        return tomorrow.getTime();
    }
    
    async completeDailyTask(taskId, task, btnElement) {
        if (this.dailyTasksCompleted.has(taskId)) {
            this.showNotification('Already Completed', 'Daily task already done today', 'warning');
            return false;
        }
        
        const url = task.url;
        window.open(url, '_blank');
        
        btnElement.innerHTML = '<i class="fas fa-spinner fa-pulse"></i>';
        btnElement.disabled = true;
        
        let seconds = APP_CONFIG.TASK_VERIFICATION_DELAY;
        const interval = setInterval(() => {
            seconds--;
            if (seconds <= 0) {
                clearInterval(interval);
                btnElement.innerHTML = 'Claim';
                btnElement.disabled = false;
                btnElement.classList.remove('start');
                btnElement.classList.add('check');
                
                const newBtn = btnElement.cloneNode(true);
                btnElement.parentNode.replaceChild(newBtn, btnElement);
                
                newBtn.addEventListener('click', async (e) => {
                    e.stopPropagation();
                    newBtn.innerHTML = '<i class="fas fa-spinner fa-pulse"></i>';
                    newBtn.disabled = true;
                    
                    let isMember = false;
                    
                    if (task.verify) {
                        const chatId = this.extractChatId(url);
                        if (chatId) {
                            const isBotAdmin = await this.checkBotAdmin(chatId);
                            if (!isBotAdmin) {
                                isMember = true;
                            } else {
                                isMember = await this.checkMembership(chatId);
                            }
                        } else {
                            isMember = true;
                        }
                    } else {
                        isMember = true;
                    }
                    
                    if (isMember) {
                        const originalPower = this.powerBalance;
                        this.powerBalance += task.reward;
                        this._dirtyPower = true;
                        
                        const saved = await this.saveUserData(true);
                        
                        if (!saved) {
                            this.powerBalance = originalPower;
                            this._dirtyPower = false;
                            this.showNotification('Error', this.t('save_error'), 'error');
                            newBtn.innerHTML = 'Claim';
                            newBtn.disabled = false;
                            newBtn.classList.remove('check');
                            newBtn.classList.add('start');
                            return;
                        }
                        
                        this.dailyTasksCompleted.set(taskId, true);
                        this.saveDailyTaskStatus();
                        
                        await this.updateLevelFromPower();
                        
                        newBtn.innerHTML = 'Done';
                        newBtn.disabled = true;
                        newBtn.classList.add('done');
                        newBtn.classList.remove('check');
                        
                        this.showNotification('Task Completed!', `${task.reward} Power`, 'success');
                        this.renderEarn();
                    } else {
                        this.showNotification('Join Required', 'Please join the channel first', 'warning');
                        newBtn.innerHTML = 'Start';
                        newBtn.disabled = false;
                        newBtn.classList.remove('check');
                        newBtn.classList.add('start');
                    }
                });
            }
        }, 1000);
        
        return true;
    }
    
    async loadCompletedTasks() {
        const cached = localStorage.getItem(`completed_${this.tgUser.id}`);
        if (cached && !this._forceRefreshCompleted) {
            this.userCompletedTasks = new Set(JSON.parse(cached));
            return;
        }
        
        if (!this.db) {
            this.userCompletedTasks = new Set();
            return;
        }
        
        try {
            const snap = await this.db.ref(`users/${this.tgUser.id}/completedTasks`).once('value');
            this.userCompletedTasks = snap.exists() ? new Set(snap.val()) : new Set();
            localStorage.setItem(`completed_${this.tgUser.id}`, JSON.stringify(Array.from(this.userCompletedTasks)));
            this._forceRefreshCompleted = false;
        } catch (error) {
            console.warn('Failed to load completed tasks:', error);
            this.userCompletedTasks = new Set();
        }
    }
    
    async loadCompletedMainTasks() {
        if (!this.db) return;
        try {
            const snap = await this.db.ref(`users/${this.tgUser.id}/completedMainTasks`).once('value');
            this.userCompletedMainTasks = snap.exists() ? new Set(snap.val()) : new Set();
        } catch (error) {
            console.warn('Failed to load completed main tasks:', error);
            this.userCompletedMainTasks = new Set();
        }
    }
    
    async loadWithdrawals() {
        if (this._withdrawLoaded) return;
        
        const cached = localStorage.getItem(`withdrawals_${this.tgUser.id}`);
        if (cached) {
            this.withdrawals = JSON.parse(cached);
            if (this.withdrawals.length > 5) this.withdrawals = this.withdrawals.slice(0, 5);
        }
        
        try {
            const snap = await this.db.ref(`withdrawals/${this.tgUser.id}`).once('value');
            this.withdrawals = [];
            if (snap.exists()) {
                snap.forEach(c => {
                    this.withdrawals.push({ id: c.key, ...c.val() });
                });
                this.withdrawals.sort((a, b) => b.timestamp - a.timestamp);
                if (this.withdrawals.length > 5) this.withdrawals = this.withdrawals.slice(0, 5);
                localStorage.setItem(`withdrawals_${this.tgUser.id}`, JSON.stringify(this.withdrawals));
            }
        } catch (error) {
            console.warn('Failed to load withdrawals:', error);
        }
        
        this._withdrawLoaded = true;
    }
    
    async loadReferralStats() {
        if (!this.db) return;
        try {
            const totalRef = this.db.ref(`users/${this.tgUser.id}/totalReferrals`);
            const totalSnap = await totalRef.once('value');
            this.totalReferrals = totalSnap.val() ?? 0;
            
            const powerRef = this.db.ref(`users/${this.tgUser.id}/referralPower`);
            const powerSnap = await powerRef.once('value');
            this.referralPower = powerSnap.val() ?? 0;
        } catch (error) {
            console.warn('Failed to load referral stats:', error);
        }
    }
    
    async loadTasks() {
        if (!this.db) {
            this.partnerTasks = [];
            return;
        }
        
        const now = Date.now();
        if (this.cache.tasks && (now - this.cache.tasksTime) < 3600000) {
            this.partnerTasks = this.cache.tasks.partner || [];
            return;
        }
        
        try {
            const snap = await this.db.ref('tasks').once('value');
            this.partnerTasks = [];
            if (snap.exists()) {
                snap.forEach(c => {
                    const task = { id: c.key, ...c.val() };
                    const total = task.total || 0;
                    const max = task.max;
                    
                    if (max !== undefined && max !== null && total >= max) {
                        return;
                    }
                    
                    if (task.category === 'partner') this.partnerTasks.push(task);
                });
            }
            this.cache.tasks = {
                main: APP_CONFIG.MAIN_TASKS,
                partner: this.partnerTasks
            };
            this.cache.tasksTime = now;
        } catch (error) {
            console.warn('Failed to load tasks:', error);
            this.partnerTasks = [];
        }
    }
    
    async loadEarnData() {
        await this.loadTasks();
        await this.loadCompletedTasks();
        await this.loadCompletedMainTasks();
        await this.loadDailyTaskStatus();
        await this.loadUserTasks();
    }
    
    renderMining() {
        const el = document.getElementById('mining-page');
        if (!el) return;
        const requiredPower = this.getRequiredPowerForLevel(this.userLevel + 1);
        const hourlyRate = this.getHourlyTonRate() * 5;
        const dailyRate = this.getDailyTonRate();
        const monthlyRate = this.getMonthlyTonRate();
        const progressPercent = this.getMiningProgressPercent();
        const radius = 70;
        const circumference = 2 * Math.PI * radius;
        const dashOffset = circumference - (progressPercent / 100) * circumference;
        
        const showStartButton = !this.miningActive && this.pendingTonReward <= 0;
        const showClaimButton = !this.miningActive && this.pendingTonReward > 0;
        const showMiningActive = this.miningActive;
        
        const currentLevelQuest = this.getCurrentLevelQuest();
        const currentMiningQuest = this.getCurrentMiningQuest();
        const levelQuestTarget = currentLevelQuest ? currentLevelQuest.target_level : null;
        const miningQuestTarget = currentMiningQuest ? currentMiningQuest.target_starts : null;
        
        el.innerHTML = `
            <div class="mining-card">
                <div class="mining-icon-container">
                    <img src="${APP_CONFIG.MINING_ICON || 'https://i.ibb.co/bjyVgYqJ/256e636cf3a0.jpg'}" class="mining-icon ${this.miningActive ? 'pulse-logo' : ''}">
                    <svg class="progress-ring" width="150" height="150" viewBox="0 0 150 150">
                        <circle cx="75" cy="75" r="${radius}" fill="none" stroke="rgba(92,107,192,0.2)" stroke-width="6"/>
                        <circle class="progress-ring-circle" cx="75" cy="75" r="${radius}" fill="none" stroke="var(--primary)" stroke-width="6" stroke-dasharray="${circumference}" stroke-dashoffset="${circumference}" stroke-linecap="round" transform="rotate(-90 75 75)"/>
                    </svg>
                </div>
                <h3>${this.t('mining_rig')}${this.userLevel}</h3>
                <div class="rate-stats">
                    <div class="rate-stat"><div class="stat-label">${this.t('hourly')}</div><div class="stat-value">${hourlyRate.toFixed(7)}</div></div>
                    <div class="rate-stat"><div class="stat-label">${this.t('daily')}</div><div class="stat-value">${dailyRate.toFixed(5)}</div></div>
                    <div class="rate-stat"><div class="stat-label">${this.t('monthly')}</div><div class="stat-value">${monthlyRate.toFixed(5)}</div></div>
                </div>
                ${showMiningActive ? `<div class="mining-timer"><i class="fas fa-hourglass-half"></i> 00:00:00</div><div class="mining-active-badge"><i class="fas fa-circle"></i> ${this.t('mining_active')}</div>` : ''}
                ${showStartButton ? `<button id="start-mining-btn" class="mining-action-btn"><i class="fas fa-play"></i> ${this.t('start_mining')}</button>` : ''}
                ${showClaimButton ? `<button id="claim-mining-btn" class="mining-claim-btn"><i class="fas fa-gift"></i> ${this.t('claim_reward')}</button>` : ''}
            </div>
            
            <div class="quests-section">
                <h3 class="quests-title"><i class="fas fa-scroll"></i> ${this.t('quests_title')}</h3>
                <div class="quest-card">
                    <div class="quest-icon"><i class="fas fa-gift"></i></div>
                    <div class="quest-info">
                        <h4>${this.t('welcome_bonus')}</h4>
                        <div class="quest-reward"><i class="fas fa-bolt"></i> ${this.formatNumber(APP_CONFIG.QUESTS.welcome_bonus.reward)} ${this.t('power')}</div>
                    </div>
                    ${!this.quests.welcomeBonusClaimed ? `<button id="claim-welcome-quest" class="quest-claim-btn"><i class="fas fa-gift"></i> ${this.t('claim_quest')}</button>` : `<button class="quest-claim-btn claimed" disabled><i class="fas fa-check"></i> ${this.t('claimed')}</button>`}
                </div>
                
                ${currentLevelQuest ? `<div class="quest-card">
                    <div class="quest-icon"><i class="fas fa-trophy"></i></div>
                    <div class="quest-info">
                        <h4>${this.t('up_to_level', { level: currentLevelQuest.target_level })}</h4>
                        <div class="quest-reward"><i class="fas fa-bolt"></i> ${this.formatNumber(currentLevelQuest.reward)} ${this.t('power')}</div>
                    </div>
                    ${this.userLevel >= currentLevelQuest.target_level ? `<button id="claim-level-quest" class="quest-claim-btn"><i class="fas fa-trophy"></i> ${this.t('claim_quest')}</button>` : `<button class="quest-claim-btn locked" disabled><i class="fas fa-lock"></i> Locked</button>`}
                </div>` : ''}
                
                ${currentMiningQuest ? `<div class="quest-card">
                    <div class="quest-icon"><i class="fas fa-hammer"></i></div>
                    <div class="quest-info">
                        <h4>${this.t('start_mining_quest', { times: currentMiningQuest.target_starts })}</h4>
                        <div class="quest-reward"><i class="fas fa-bolt"></i> ${this.formatNumber(currentMiningQuest.reward)} ${this.t('power')}</div>
                        <div class="quest-progress"><i class="fas fa-chart-line"></i> Progress: ${this.totalMiningStarts}/${currentMiningQuest.target_starts}</div>
                    </div>
                    ${this.totalMiningStarts >= currentMiningQuest.target_starts ? `<button id="claim-mining-quest" class="quest-claim-btn"><i class="fas fa-hammer"></i> ${this.t('claim_quest')}</button>` : `<button class="quest-claim-btn locked" disabled><i class="fas fa-lock"></i> Locked</button>`}
                </div>` : ''}
            </div>
        `;
        
        const ringCircle = document.querySelector('.progress-ring-circle');
        if (ringCircle) {
            ringCircle.style.strokeDashoffset = dashOffset;
        }
        
        document.getElementById('start-mining-btn')?.addEventListener('click', () => this.startMining());
        document.getElementById('claim-mining-btn')?.addEventListener('click', () => this.claimMiningRewards());
        document.getElementById('claim-welcome-quest')?.addEventListener('click', () => this.claimWelcomeBonus());
        document.getElementById('claim-level-quest')?.addEventListener('click', () => this.claimLevelQuest());
        document.getElementById('claim-mining-quest')?.addEventListener('click', () => this.claimMiningQuest());
        
        if (this.miningActive) this.updateMiningTimerDisplay();
        
        // Check daily bonus after rendering mining page
        this.checkDailyBonus();
    }
    
    renderAddTaskModal() {
        const container = document.getElementById('my-tasks-list-modal');
        if (!container) return;
        
        if (this.userTasks.length === 0) {
            container.innerHTML = `<div class="no-data"><i class="fas fa-tasks"></i><p>${this.t('no_tasks_created')}</p><small>${this.t('no_tasks_created_sub')}</small></div>`;
            return;
        }
        
        container.innerHTML = this.userTasks.map(task => {
            const statusClass = task.status === 'active' ? 'active' : 'pending';
            const statusText = task.status === 'active' ? this.t('active_status') : this.t('pending_status');
            const progressPercent = (task.total / task.max) * 100;
            
            return `
                <div class="my-task-card">
                    <div class="task-header">
                        <div class="task-left">
                            <i class="fas fa-tag"></i>
                            <span class="task-name">${task.name}</span>
                        </div>
                        <div class="task-status ${statusClass}">${statusText}</div>
                    </div>
                    ${task.status === 'active' ? `
                        <div class="task-progress">
                            <div class="progress-bar" style="width: ${progressPercent}%"></div>
                            <div class="progress-text">${task.total}/${task.max} ${this.t('completions_count')}</div>
                        </div>
                    ` : ''}
                </div>
            `;
        }).join('');
    }

    renderEarn() {
    const el = document.getElementById('earn-page');
    if (!el) return;
    
    const resetTime = this.getDailyResetTimeUTC();
    const now = Date.now();
    const timeRemaining = Math.max(0, resetTime - now);
    const hoursRemaining = Math.floor(timeRemaining / 3600000);
    const minutesRemaining = Math.floor((timeRemaining % 3600000) / 60000);
    
    const dailyTasksHtml = APP_CONFIG.DAILY_TASKS.map(task => {
        const isCompleted = this.dailyTasksCompleted.has(task.id);
        const btnClass = isCompleted ? 'done' : 'start';
        const btnText = isCompleted ? 'Done' : this.t('start');
        const icon = task.icon || 'fa-clock';
        
        return `
            <div class="daily-task-card">
                <div class="daily-task-header">
                    <div class="daily-task-icon"><i class="fas ${icon}"></i></div>
                    <div class="daily-task-info">
                        <h4>${task.name}</h4>
                        <div class="daily-task-reward"><i class="fas fa-bolt"></i> ${task.reward} ${this.t('power')}</div>
                    </div>
                    <button class="task-btn ${btnClass}" data-task-id="${task.id}" data-task-reward="${task.reward}" data-task-url="${task.url}" data-task-verify="${task.verify}" ${isCompleted ? 'disabled' : ''}>${btnText}</button>
                </div>
            </div>
        `;
    }).join('');
    
    el.innerHTML = `
        <div class="promo-card">
            <div class="promo-header">
                <div class="promo-title"><i class="fas fa-gift"></i> ${this.t('promo_code')}</div>
                <button id="promo-info-btn" class="info-icon-btn"><i class="fas fa-question-circle"></i></button>
            </div>
            <div class="promo-input-group">
                <input type="text" id="promo-input" class="form-input" placeholder="${this.t('enter_code')}" autocomplete="off">
                <button id="promo-submit" class="promo-submit-btn" disabled>${this.t('claim')}</button>
            </div>
        </div>
        
        <div class="section-header">
            <h3><i class="fas fa-clock"></i> ${this.t('daily_tasks')}</h3>
            <p>${this.t('refresh_in')}: ${hoursRemaining.toString().padStart(2, '0')}:${minutesRemaining.toString().padStart(2, '0')}</p>
        </div>
        
        <div class="daily-tasks-container">
            ${dailyTasksHtml}
        </div>
        
        <div class="section-header" style="position: relative;">
            <h3 style="flex:1; text-align:center;"><i class="fas fa-tasks"></i> ${this.t('available_tasks')} (0)</h3>
            <button id="tasks-info-btn" class="info-icon-btn pulse-btn" style="position: absolute; right: 12px; top: 50%; transform: translateY(-50%);"><i class="fas fa-plus-circle"></i></button>
        </div>
        <div class="tasks-list" id="social-tasks-list-container">
            <div class="task-loading"><i class="fas fa-spinner fa-pulse"></i><p>${this.t('loading')}...</p></div>
        </div>
    `;
    
    const promoInput = document.getElementById('promo-input');
    const promoSubmit = document.getElementById('promo-submit');
    if (promoInput && promoSubmit) {
        promoInput.addEventListener('input', () => {
            promoSubmit.disabled = promoInput.value.trim() === '';
            promoSubmit.classList.toggle('active', !promoSubmit.disabled);
        });
        promoSubmit.addEventListener('click', () => {
            const code = promoInput.value.trim();
            if (code) this.applyPromoCode(code);
            promoInput.value = '';
            promoSubmit.disabled = true;
            promoSubmit.classList.remove('active');
        });
    }
    
    document.getElementById('tasks-info-btn')?.addEventListener('click', async () => {
        await this.loadUserTasks();
        this.openAddTaskModal();
    });
    
    document.getElementById('promo-info-btn')?.addEventListener('click', () => {
        document.getElementById('promo-info-modal').style.display = 'flex';
        this.updateModalTranslations();
    });
    
    document.querySelectorAll('.daily-task-card .task-btn.start').forEach(btn => {
        const taskId = btn.dataset.taskId;
        const taskReward = parseInt(btn.dataset.taskReward);
        const taskUrl = btn.dataset.taskUrl;
        const taskVerify = btn.dataset.taskVerify === 'true';
        const task = APP_CONFIG.DAILY_TASKS.find(t => t.id === taskId);
        
        btn.addEventListener('click', async () => {
            if (this.isTaskRunning) {
                this.showNotification('Busy', 'Complete current task first', 'warning');
                return;
            }
            this.isTaskRunning = true;
            await this.completeDailyTask(taskId, { url: taskUrl, reward: taskReward, verify: taskVerify }, btn);
            this.isTaskRunning = false;
        });
    });
    
    this.loadActiveSocialTasks().then(activeTasks => {
        const container = document.getElementById('social-tasks-list-container');
        const activeTasksCount = activeTasks.length;
        
        const header = document.querySelector('#earn-page .section-header:last-child h3');
        if (header) {
            header.innerHTML = `<i class="fas fa-tasks"></i> ${this.t('available_tasks')}`;
        }
        
        const p = document.querySelector('#earn-page .section-header:last-child p');
        if (p) p.innerText = `${this.t('available_tasks')}: ${activeTasksCount}`;
        
        if (container) {
            if (activeTasks.length > 0) {
                container.innerHTML = activeTasks.map(t => `
                    <div class="task-item daily-task-card">
                        <div class="daily-task-header">
                            <div class="daily-task-icon"><img src="${APP_CONFIG.TASK_IMAGE}" class="task-img" style="width:48px;height:48px;border-radius:50%;object-fit:cover"></div>
                            <div class="daily-task-info">
                                <h4>${t.name}</h4>
                                <div class="task-reward"><i class="fas fa-bolt"></i> ${APP_CONFIG.TASK_REWARD} ${this.t('power')}</div>
                            </div>
                            <button class="task-btn start" data-id="${t.id}" data-reward="${APP_CONFIG.TASK_REWARD}" data-url="${t.url}" data-verify="${t.verification}">Start</button>
                        </div>
                    </div>
                `).join('');
                
                document.querySelectorAll('#social-tasks-list-container .task-btn.start').forEach(btn => {
                    btn.addEventListener('click', async () => {
                        if (this.isTaskRunning) {
                            this.showNotification('Busy', 'Complete current task first', 'warning');
                            return;
                        }
                        const id = btn.dataset.id;
                        const reward = parseInt(btn.dataset.reward);
                        const url = btn.dataset.url;
                        const verify = btn.dataset.verify === 'true';
                        const taskData = activeTasks.find(t => t.id === id);
                        
                        window.open(url, '_blank');
                        this.isTaskRunning = true;
                        this.disableAllTaskButtons();
                        btn.innerHTML = '<i class="fas fa-spinner fa-pulse"></i>';
                        btn.disabled = true;
                        
                        let seconds = APP_CONFIG.TASK_VERIFICATION_DELAY;
                        const interval = setInterval(() => {
                            seconds--;
                            if (seconds <= 0) {
                                clearInterval(interval);
                                btn.innerHTML = 'Claim';
                                btn.disabled = false;
                                btn.classList.remove('start');
                                btn.classList.add('check');
                                
                                const newBtn = btn.cloneNode(true);
                                btn.parentNode.replaceChild(newBtn, btn);
                                
                                newBtn.addEventListener('click', async (e) => {
                                    e.stopPropagation();
                                    newBtn.innerHTML = '<i class="fas fa-spinner fa-pulse"></i>';
                                    newBtn.disabled = true;
                                    await this.completeTask(id, reward, url, verify, newBtn, false, true, taskData);
                                });
                            }
                        }, 1000);
                    });
                });
            } else {
                container.innerHTML = '<div class="no-data"><i class="fas fa-globe"></i><p>' + this.t('no_tasks') + '</p><small>' + this.t('check_later') + '</small></div>';
            }
        }
    });
}
    
    renderTeam() {
        const el = document.getElementById('team-page');
        if (!el) return;
        const link = APP_CONFIG.BOT_LINK + this.tgUser.id;
        
        // Calculate active members
        const activeMembers = this.referralPower > 0 ? Math.floor(this.referralPower / APP_CONFIG.REFERRAL_POWER_REWARD) : 0;
        const totalEarnings = this.referralPower;
        
        el.innerHTML = `
            <div class="team-card glass-card" style="padding:20px; border-radius:var(--border-radius); margin-bottom:20px;">
                <h3 style="text-align:center; color:var(--primary-light); margin-bottom:20px;"><i class="fas fa-users"></i> ${this.t('invite_earn')}</h3>
                <div style="display:grid; grid-template-columns:1fr 1fr; gap:12px; margin-bottom:16px;">
                    <div class="team-stat-card">
                        <div class="stat-number">+${APP_CONFIG.REFERRAL_POWER_REWARD}</div>
                        <div class="stat-label">${this.t('verified_member')}</div>
                    </div>
                    <div class="team-stat-card">
                        <div class="stat-number">${APP_CONFIG.REFERRAL_PERCENTAGE}%</div>
                        <div class="stat-label">${this.t('team_earnings')}</div>
                    </div>
                </div>
                <div style="text-align:center; color:#888; font-size:0.75rem; margin-bottom:16px;">
                    ${this.t('more_active_members')}
                </div>
                <div style="display:flex; gap:8px;">
                    <button id="copyLink" class="modern-support-btn" style="flex:1; margin:0;"><i class="fas fa-copy"></i> ${this.t('copy_link')}</button>
                    <button id="shareLink" class="modern-support-btn telegram-btn" style="flex:1; margin:0;"><i class="fas fa-users"></i> ${this.t('get_referrals')}</button>
                </div>
            </div>
            
            <div class="team-stats-grid">
                <div class="team-stat-card">
                    <div class="stat-number">${this.totalReferrals}</div>
                    <div class="stat-label">${this.t('total_members')}</div>
                </div>
                <div class="team-stat-card">
                    <div class="stat-number">${activeMembers}</div>
                    <div class="stat-label">${this.t('active_members')}</div>
                </div>
                <div class="team-stat-card" style="grid-column: span 2;">
                    <div class="stat-number">${this.formatNumber(Math.floor(totalEarnings))}</div>
                    <div class="stat-label">${this.t('total_earnings')}</div>
                </div>
            </div>
        `;
        
        document.getElementById('copyLink')?.addEventListener('click', () => {
            navigator.clipboard.writeText(link);
            this.showNotification(this.t('copy_success'), this.t('link_copied'), 'success');
        });
        
        document.getElementById('shareLink')?.addEventListener('click', () => {
            const shareUrl = APP_CONFIG.REFERRAL_LINK || 'https://t.me/NEJARS';
            window.open(shareUrl, '_blank');
        });
    }
    
    renderWithdraw() {
        const el = document.getElementById('withdraw-page');
        if (!el) return;
        const historyHtml = this.withdrawals && this.withdrawals.length ? this.withdrawals.map(w => `
            <div class="history-item">
                <div class="history-amount"><img src="${APP_CONFIG.GRAM_ICON}" style="width:16px;height:16px;border-radius:50%;"> ${w.amount.toFixed(5)} GRAM ${w.fees > 0 ? `(+${w.fees.toFixed(5)} fee)` : ''}</div>
                <div class="history-status ${w.status}">${w.status === 'pending' ? this.t('pending') : this.t('completed')}</div>
            </div>
        `).join('') : '<div class="no-data">' + this.t('no_withdrawals') + '</div>';
        
        const feesNote = APP_CONFIG.WITHDRAWAL_FEES > 0 ? `<div class="withdraw-note"><i class="fas fa-info-circle"></i> ${this.t('withdrawal_fees_note', { fees: APP_CONFIG.WITHDRAWAL_FEES })}</div>` : '';
        
        el.innerHTML = `
            <div class="withdraw-card">
                <div class="withdraw-balance"><img src="${APP_CONFIG.GRAM_ICON}" style="width:28px;height:28px;border-radius:50%;"> ${this.t('available')}: ${this.tonBalance.toFixed(6)} GRAM</div>
                <div class="form-group">
                    <label class="form-label">${this.t('ton_wallet')}</label>
                    <div class="input-wrapper">
                        <input type="text" id="wallet-addr" class="form-input" placeholder="UQ...">
                    </div>
                </div>
                <div class="form-group">
                    <label class="form-label">${this.t('amount')}</label>
                    <div class="input-wrapper">
                        <input type="number" id="withdraw-amount" class="form-input" placeholder="${this.t('min_withdraw')}: ${APP_CONFIG.MINIMUM_WITHDRAW} GRAM" step="0.00001">
                        <button id="max-amount" class="action-btn">MAX</button>
                    </div>
                </div>
                <div class="withdraw-note"><i class="fas fa-info-circle"></i> ${this.t('min_withdraw')}: ${APP_CONFIG.MINIMUM_WITHDRAW} GRAM</div>
                ${feesNote}
                <button id="withdraw-btn" class="withdraw-confirm-btn disabled">${this.t('confirm_withdrawal')}</button>
            </div>
            <div class="history-list">
                <h4><i class="fas fa-history"></i> ${this.t('withdrawal_history')}</h4>
                ${historyHtml}
            </div>
        `;
        
        const walletInput = document.getElementById('wallet-addr');
        const amountInput = document.getElementById('withdraw-amount');
        const withdrawBtn = document.getElementById('withdraw-btn');
        const maxBtn = document.getElementById('max-amount');
        
        const checkWithdrawReady = () => {
            const wallet = walletInput?.value.trim();
            const amount = parseFloat(amountInput?.value);
            const totalRequired = amount + (APP_CONFIG.WITHDRAWAL_FEES > 0 ? APP_CONFIG.WITHDRAWAL_FEES : 0);
            const isValid = wallet && wallet.length >= 20 && amount >= APP_CONFIG.MINIMUM_WITHDRAW && totalRequired <= this.tonBalance;
            if (withdrawBtn) {
                if (isValid) withdrawBtn.classList.remove('disabled');
                else withdrawBtn.classList.add('disabled');
            }
        };
        
        maxBtn?.addEventListener('click', () => {
            if (amountInput) {
                let maxAmount = this.tonBalance - (APP_CONFIG.WITHDRAWAL_FEES > 0 ? APP_CONFIG.WITHDRAWAL_FEES : 0) - 0.00001;
                if (maxAmount < 0) maxAmount = 0;
                amountInput.value = maxAmount.toFixed(6);
                checkWithdrawReady();
            }
        });
        
        walletInput?.addEventListener('input', checkWithdrawReady);
        amountInput?.addEventListener('input', checkWithdrawReady);
        
        withdrawBtn?.addEventListener('click', () => {
            if (withdrawBtn.classList.contains('disabled')) return;
            const amount = parseFloat(amountInput.value);
            const wallet = walletInput.value.trim();
            this.withdraw(amount, wallet);
        });
    }
    
    updateModalTranslations() {
        const claimTitle = document.getElementById('claim-title');
        if (claimTitle) claimTitle.innerHTML = `<i class="fas fa-gift"></i> ${this.t('claim_mining_title')}`;
        const claimBtn = document.getElementById('confirm-claim-btn');
        if (claimBtn) claimBtn.innerText = this.t('claim_btn');
        
        const promoTitle = document.querySelector('#promo-info-modal .modal-header h3');
        if (promoTitle) promoTitle.innerHTML = `<i class="fas fa-ticket-alt"></i> ${this.t('promo_info_title')}`;
        const getPromoBtn = document.getElementById('get-promo-codes-btn');
        if (getPromoBtn) getPromoBtn.innerHTML = `<i class="fab fa-telegram"></i> ${this.t('get_promo_codes')}`;
        const stepsTitle = document.getElementById('promo-steps-title');
        if (stepsTitle) stepsTitle.innerText = this.t('how_it_works');
        const step1 = document.getElementById('promo-step-1');
        if (step1) step1.innerText = this.t('step1');
        const step2 = document.getElementById('promo-step-2');
        if (step2) step2.innerText = this.t('step2');
        const step3 = document.getElementById('promo-step-3');
        if (step3) step3.innerText = this.t('step3');
        
        document.getElementById('nav-mining').innerText = this.t('mining');
        document.getElementById('nav-earn').innerText = this.t('earn');
        document.getElementById('nav-team').innerText = this.t('team');
        document.getElementById('nav-withdraw').innerText = this.t('withdraw');
        document.getElementById('user-level-text').innerText = this.t('level');
        
        const addTaskTitle = document.getElementById('add-task-title');
        if (addTaskTitle) addTaskTitle.innerText = this.t('add_task_title');
        const myTasksTitle = document.getElementById('my-tasks-title');
        if (myTasksTitle) myTasksTitle.innerText = this.t('my_tasks_title');
        const taskNameLabel = document.getElementById('task-name-label');
        if (taskNameLabel) taskNameLabel.innerText = this.t('task_name');
        const taskUrlLabel = document.getElementById('task-url-label');
        if (taskUrlLabel) taskUrlLabel.innerText = this.t('task_url');
        const verificationLabel = document.getElementById('verification-label');
        if (verificationLabel) verificationLabel.innerText = this.t('verification');
        const completionsLabel = document.getElementById('completions-label');
        if (completionsLabel) completionsLabel.innerText = this.t('max_completions');
        
        const taskNameInput = document.getElementById('task-name-input');
        if (taskNameInput) taskNameInput.placeholder = this.t('task_name_placeholder');
        const taskUrlInput = document.getElementById('task-url-input');
        if (taskUrlInput) taskUrlInput.placeholder = this.t('task_url_placeholder');
        
        const verifyYesBtn = document.getElementById('verify-yes-btn');
        if (verifyYesBtn) verifyYesBtn.innerText = this.t('verification_yes');
        const verifyNoBtn = document.getElementById('verify-no-btn');
        if (verifyNoBtn) verifyNoBtn.innerText = this.t('verification_no');
        
        const completionsBtns = document.querySelectorAll('#add-task-modal .completions-group .toggle-option');
        if (completionsBtns.length >= 4) {
            completionsBtns[0].innerText = this.t('completions_100');
            completionsBtns[1].innerText = this.t('completions_250');
            completionsBtns[2].innerText = this.t('completions_500');
            completionsBtns[3].innerText = this.t('completions_1000');
        }
        
        const payBtn = document.getElementById('pay-task-btn');
        if (payBtn) {
            const max = document.querySelector('#add-task-modal .completions-group .toggle-option.active')?.dataset.value || null;
            if (max) {
                const price = (APP_CONFIG.TON_PRICE_PER_100 * (max / 100));
                payBtn.innerHTML = `PAY ${price} GRAM`;
            } else {
                payBtn.innerHTML = `PAY 0 GRAM`;
            }
        }
        
        const currentFlag = this.lang === 'ru' ? '🇷🇺' : this.lang === 'en' ? '🇬🇧' : this.lang === 'tr' ? '🇹🇷' : '🇸🇦';
        document.getElementById('current-flag').innerText = currentFlag;
    }
    
    openAddTaskModal() {
        const nameInput = document.getElementById('task-name-input');
        const urlInput = document.getElementById('task-url-input');
        const payBtn = document.getElementById('pay-task-btn');
        const checkBtn = document.getElementById('check-payment-btn');
        
        if (nameInput) nameInput.value = '';
        if (urlInput) urlInput.value = '';
        
        const verifyButtons = document.querySelectorAll('#add-task-modal .toggle-option[data-value]');
        verifyButtons.forEach(btn => btn.classList.remove('active'));
        
        const completionsButtons = document.querySelectorAll('#add-task-modal .completions-group .toggle-option');
        completionsButtons.forEach(btn => btn.classList.remove('active'));
        
        const addAdminDiv = document.getElementById('add-admin-div');
        if (addAdminDiv) addAdminDiv.style.display = 'none';
        
        if (payBtn) {
            payBtn.disabled = false;
            payBtn.style.opacity = '1';
            payBtn.style.pointerEvents = 'auto';
            payBtn.innerHTML = 'PAY 0 GRAM';
        }
        
        if (checkBtn) {
            checkBtn.disabled = true;
            checkBtn.style.opacity = '0.5';
            checkBtn.style.pointerEvents = 'none';
        }
        
        this.setupAddTaskModalListeners();
        this.renderAddTaskModal();
        this.updateModalTranslations();
        document.getElementById('add-task-modal').style.display = 'flex';
    }
    
    setupAddTaskModalListeners() {
        const verifyOptions = document.querySelectorAll('#add-task-modal .toggle-option[data-value="true"], #add-task-modal .toggle-option[data-value="false"]');
        verifyOptions.forEach(opt => {
            opt.removeEventListener('click', this.handleVerifyToggle);
            opt.addEventListener('click', this.handleVerifyToggle.bind(this));
        });
        
        const completionsOptions = document.querySelectorAll('#add-task-modal .completions-group .toggle-option');
        completionsOptions.forEach(opt => {
            opt.removeEventListener('click', this.handleCompletionsToggle);
            opt.addEventListener('click', this.handleCompletionsToggle.bind(this));
        });
        
        const payBtn = document.getElementById('pay-task-btn');
        const checkBtn = document.getElementById('check-payment-btn');
        
        if (payBtn) {
            const newPayBtn = payBtn.cloneNode(true);
            payBtn.parentNode.replaceChild(newPayBtn, payBtn);
            newPayBtn.addEventListener('click', async () => {
                const name = document.getElementById('task-name-input').value.trim();
                const url = document.getElementById('task-url-input').value.trim();
                const verification = document.querySelector('#add-task-modal .toggle-option.active[data-value]')?.dataset.value || 'false';
                const maxCompletions = document.querySelector('#add-task-modal .completions-group .toggle-option.active')?.dataset.value;
                
                if (!name || name.length > 15 || !/^[a-zA-Z0-9\s]+$/.test(name)) {
                    this.showNotification('Error', 'Name must be max 15 chars, English only', 'error');
                    return;
                }
                if (!url || !url.startsWith('https://')) {
                    this.showNotification('Error', 'URL must start with https://', 'error');
                    return;
                }
                if (!name || !url) {
                    this.showNotification('Error', this.t('all_fields_required'), 'error');
                    return;
                }
                if (!maxCompletions) {
                    this.showNotification('Error', this.t('choose_completions'), 'error');
                    return;
                }
                if (verification === 'true' && !url.includes('t.me/')) {
                    this.showNotification('Error', 'Verification requires a Telegram channel URL (t.me/...)', 'error');
                    return;
                }
                
                await this.addSocialTask(name, url, verification, maxCompletions);
            });
        }
        
        if (checkBtn) {
            const newCheckBtn = checkBtn.cloneNode(true);
            checkBtn.parentNode.replaceChild(newCheckBtn, checkBtn);
            newCheckBtn.addEventListener('click', async () => {
                const taskId = localStorage.getItem('pending_task_id');
                if (!taskId) {
                    this.showNotification('Error', 'No pending payment', 'error');
                    return;
                }
                await this.verifyTonPayment(taskId, null, null, null, null, null);
            });
        }
    }
    
    handleVerifyToggle(e) {
        const btn = e.currentTarget;
        const parent = btn.parentElement;
        parent.querySelectorAll('.toggle-option').forEach(opt => opt.classList.remove('active'));
        btn.classList.add('active');
        
        const addAdminDiv = document.getElementById('add-admin-div');
        if (addAdminDiv) {
            if (btn.dataset.value === 'true') {
                const botLink = `https://t.me/${APP_CONFIG.BOT_USERNAME}?startchannel=m&admin=invite_users`;
                addAdminDiv.innerHTML = `<button class="add-bot-btn" onclick="window.open('${botLink}', '_blank')"><i class="fab fa-telegram"></i> ${this.t('add_bot_as_admin')}</button>`;
                addAdminDiv.style.display = 'block';
            } else {
                addAdminDiv.style.display = 'none';
            }
        }
    }
    
    handleCompletionsToggle(e) {
        const btn = e.currentTarget;
        const parent = btn.parentElement;
        parent.querySelectorAll('.toggle-option').forEach(opt => opt.classList.remove('active'));
        btn.classList.add('active');
        
        const max = parseInt(btn.dataset.value);
        const price = (APP_CONFIG.TON_PRICE_PER_100 * (max / 100));
        const payBtn = document.getElementById('pay-task-btn');
        const checkBtn = document.getElementById('check-payment-btn');
        
        if (payBtn) {
            payBtn.innerHTML = `PAY ${price} GRAM`;
            payBtn.disabled = false;
            payBtn.style.opacity = '1';
            payBtn.style.pointerEvents = 'auto';
        }
        
        if (checkBtn) {
            checkBtn.disabled = false;
            checkBtn.style.opacity = '1';
            checkBtn.style.pointerEvents = 'auto';
        }
    }
    
    setupEventListeners() {
        document.getElementById('get-promo-codes-btn')?.addEventListener('click', () => {
            window.open(APP_CONFIG.DAILY_CHECK_NEWS_LINK, '_blank');
        });
        document.getElementById('close-promo-info')?.addEventListener('click', () => {
            document.getElementById('promo-info-modal').style.display = 'none';
        });
        document.getElementById('close-add-task-modal')?.addEventListener('click', () => {
            document.getElementById('add-task-modal').style.display = 'none';
        });
        document.getElementById('close-daily-bonus')?.addEventListener('click', () => {
            document.getElementById('daily-bonus-modal').style.display = 'none';
        });
        
        document.addEventListener('visibilitychange', () => {
            if (document.hidden) {
                this.saveUserData(true);
            }
        });
        
        window.addEventListener('beforeunload', () => {
            if (this.miningActive || this._dirtyPower || this._dirtyTon || this._dirtyMining) {
                this.saveUserData(true);
            }
        });
        
        const langBtn = document.getElementById('lang-btn');
        const langMenu = document.getElementById('lang-menu');
        langBtn?.addEventListener('click', (e) => {
            e.stopPropagation();
            langMenu.style.display = langMenu.style.display === 'none' ? 'block' : 'none';
        });
        
        document.querySelectorAll('.lang-option').forEach(opt => {
            opt.addEventListener('click', () => {
                this.lang = opt.dataset.lang;
                localStorage.setItem('star_farmer_lang', this.lang);
                const settings = JSON.parse(localStorage.getItem('star_farmer_settings') || '{}');
                settings.lang = this.lang;
                localStorage.setItem('star_farmer_settings', JSON.stringify(settings));
                langMenu.style.display = 'none';
                this.renderUI();
                this.updateModalTranslations();
                this.updateHeaderBalances();
                this.showNotification('Language', `Changed to ${opt.innerText}`, 'success');
            });
        });
        
        document.addEventListener('click', (e) => {
            if (!langBtn?.contains(e.target) && !langMenu?.contains(e.target)) {
                if (langMenu) langMenu.style.display = 'none';
            }
        });
    }
    
    saveSettings() {
        localStorage.setItem('star_farmer_settings', JSON.stringify({ vibration: this.vibrationEnabled, lang: this.lang }));
    }
    
    loadSettings() {
        const saved = localStorage.getItem('star_farmer_settings');
        if (saved) {
            const s = JSON.parse(saved);
            this.vibrationEnabled = s.vibration !== false;
            this.lang = s.lang || this.getDeviceLanguage();
        } else {
            this.lang = this.getDeviceLanguage();
        }
        const savedLang = localStorage.getItem('star_farmer_lang');
        if (savedLang) this.lang = savedLang;
    }
    
    getDeviceLanguage() {
        const userLang = navigator.language || navigator.userLanguage;
        if (userLang.startsWith('ru')) return 'ru';
        if (userLang.startsWith('tr')) return 'tr';
        if (userLang.startsWith('ar')) return 'ar';
        return 'en';
    }
    
    setupNavigation() {
        document.querySelectorAll('.nav-btn').forEach(btn => {
            btn.addEventListener('click', async () => {
                const id = btn.dataset.page;
                document.querySelectorAll('.nav-btn').forEach(b => b.classList.remove('active'));
                btn.classList.add('active');
                document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
                document.getElementById(id).classList.add('active');
                
                if (id === 'mining-page') {
                    this.renderMining();
                } else if (id === 'earn-page') {
                    this.showPageLoader('earn-page');
                    if (!this._earnLoaded) {
                        await this.loadEarnData();
                        this._earnLoaded = true;
                    }
                    this.renderEarn();
                    this.hidePageLoader();
                } else if (id === 'team-page') {
                    this.showPageLoader('team-page');
                    if (!this._teamLoaded) {
                        await this.loadReferralStats();
                        this._teamLoaded = true;
                    }
                    this.renderTeam();
                    this.hidePageLoader();
                } else if (id === 'withdraw-page') {
                    this.showPageLoader('withdraw-page');
                    if (!this._withdrawLoaded) {
                        await this.loadWithdrawals();
                    }
                    this.renderWithdraw();
                    this.hidePageLoader();
                }
            });
        });
    }
    
    showPageLoader(pageId) {
        const page = document.getElementById(pageId);
        if (page && page.children.length === 0) {
            page.innerHTML = `<div class="task-loading"><i class="fas fa-spinner fa-pulse"></i><p>${this.t('loading')}...</p></div>`;
        }
    }
    
    hidePageLoader() {}
    
    renderUI() {
        this.renderMining();
        if (this._earnLoaded) this.renderEarn();
        if (this._teamLoaded) this.renderTeam();
        if (this._withdrawLoaded) this.renderWithdraw();
        this.updateModalTranslations();
        this.updateHeaderBalances();
    }
    
    async checkDailyBonus() {
        const today = this.getTodayUTC();
        
        // Check if already claimed today
        if (this.dailyBonusClaimed && this.dailyBonusDate === today) {
            return;
        }
        
        // Reset if new day
        if (this.dailyBonusDate !== today) {
            this.dailyBonusClaimed = false;
            this.dailyBonusDate = null;
            await this.db.ref(`users/${this.tgUser.id}/dailyBonus`).set({ claimed: false, date: null });
        }
        
        // Show daily bonus modal
        this.showDailyBonusModal();
    }
    
    showDailyBonusModal() {
        const modal = document.getElementById('daily-bonus-modal');
        if (!modal) return;
        
        const amountEl = document.getElementById('daily-bonus-amount');
        if (amountEl) {
            amountEl.innerText = `+${APP_CONFIG.DAILY_BONUS_AMOUNT} ${this.t('power')}`;
        }
        
        modal.style.display = 'flex';
        
        const claimBtn = document.getElementById('claim-daily-bonus-btn');
        if (claimBtn) {
            claimBtn.removeEventListener('click', this.handleDailyBonusClaim);
            claimBtn.addEventListener('click', this.handleDailyBonusClaim.bind(this));
        }
    }
    
    async handleDailyBonusClaim() {
        const claimBtn = document.getElementById('claim-daily-bonus-btn');
        if (!claimBtn) return;
        
        claimBtn.disabled = true;
        claimBtn.innerText = this.t('loading');
        
        try {
            const AdController = window.Adsgram.init({ blockId: APP_CONFIG.INTERSTITIAL_AD_BLOCK_ID });
            await AdController.show();
        } catch (e) {
            this.showNotification('No Ads', 'No ads available at the moment', 'warning');
            claimBtn.disabled = false;
            claimBtn.innerText = this.t('claim_daily_bonus');
            return;
        }
        
        const reward = APP_CONFIG.DAILY_BONUS_AMOUNT;
        const originalPower = this.powerBalance;
        this.powerBalance += reward;
        this._dirtyPower = true;
        
        const saved = await this.saveUserData(true);
        
        if (!saved) {
            this.powerBalance = originalPower;
            this._dirtyPower = false;
            this.showNotification('Error', this.t('save_error'), 'error');
            claimBtn.disabled = false;
            claimBtn.innerText = this.t('claim_daily_bonus');
            return;
        }
        
        const today = this.getTodayUTC();
        this.dailyBonusClaimed = true;
        this.dailyBonusDate = today;
        
        await this.db.ref(`users/${this.tgUser.id}/dailyBonus`).set({ claimed: true, date: today });
        await this.updateLevelFromPower();
        
        document.getElementById('daily-bonus-modal').style.display = 'none';
        this.showNotification('Bonus Claimed!', `+${reward} ${this.t('power')}`, 'success');
        this.renderMining();
        if (this._earnLoaded) this.renderEarn();
        
        claimBtn.disabled = false;
        claimBtn.innerText = this.t('claim_daily_bonus');
    }
    
    async initialize() {
        const progressBar = document.getElementById('loader-progress-bar');
        const loaderPercent = document.getElementById('loader-percent');
        
        const updateProgress = (percent) => {
            if (progressBar) progressBar.style.width = percent + '%';
            if (loaderPercent) loaderPercent.innerText = Math.floor(percent) + '%';
        };
        
        try {
            updateProgress(5);
            
            if (!window.Telegram?.WebApp) {
                throw new Error('Open from Telegram');
            }
            
            this.tg = window.Telegram.WebApp;
            this.tgUser = this.tg.initDataUnsafe.user;
            
            if (!this.tgUser) {
                throw new Error('No user data');
            }
            
            this.tg.ready();
            this.tg.expand();
            updateProgress(15);
            
            await this.initFirebase();
            updateProgress(35);
            
            await this.checkUserState();
            updateProgress(45);
            
            await this.checkDevice();
            await this.updateFirebaseUid();
            updateProgress(60);
            
            await this.syncServerTime();
            updateProgress(70);
            
            await this.loadUserData();
            await this.loadQuestsData();
            updateProgress(85);
            
            if (this.miningActive && this.miningEndTime) {
                const currentTime = this.getCurrentTime();
                if (currentTime >= this.miningEndTime) {
                    const elapsedSeconds = (currentTime - this.miningStartTime) / 1000;
                    const elapsedHours = elapsedSeconds / 3600;
                    this.pendingTonReward = this.calculateRewardForHours(Math.min(elapsedHours, this.miningSessionHours));
                    this.miningActive = false;
                    this.miningStartTime = null;
                    this.miningEndTime = null;
                    this._dirtyMining = true;
                    await this.saveUserData(true);
                } else {
                    this.startMiningLoop();
                }
            }
            
            const headerHtml = `
                <div class="header-balances" id="header-balances">
                    <div class="header-balance" id="header-power"><i class="fas fa-bolt"></i> ${this.formatNumber(Math.floor(this.powerBalance))}</div>
                    <div class="header-balance" id="header-ton"><img src="${APP_CONFIG.GRAM_ICON}" style="width:14px;height:14px;border-radius:50%;object-fit:cover;"> ${this.tonBalance.toFixed(4)}</div>
                </div>
            `;
            const headerActions = document.querySelector('.header-actions');
            if (headerActions && !document.getElementById('header-balances')) {
                headerActions.insertAdjacentHTML('afterbegin', headerHtml);
            }
            
            this.setupEventListeners();
            this.renderUI();
            this.setupNavigation();
            
            setInterval(() => {
                const resetTime = this.getDailyResetTimeUTC();
                const now = Date.now();
                if (now >= resetTime) {
                    this.dailyTasksCompleted.clear();
                    this.saveDailyTaskStatus();
                    if (this._earnLoaded) this.renderEarn();
                }
            }, 60000);
            
            setInterval(() => {
                if (this._dirtyPower || this._dirtyTon || this._dirtyMining) {
                    this.scheduleSave();
                }
                this.updateHeaderBalances();
            }, 60000);
            
            updateProgress(100);
            
            setTimeout(() => {
                const loader = document.getElementById('app-loader');
                if (loader) {
                    loader.style.opacity = '0';
                    setTimeout(() => {
                        loader.style.display = 'none';
                        const app = document.getElementById('app');
                        if (app) app.style.display = 'block';
                        this.updateMiningRing();
                        // Check daily bonus after app loads
                        this.checkDailyBonus();
                    }, 500);
                } else {
                    const app = document.getElementById('app');
                    if (app) app.style.display = 'block';
                    this.checkDailyBonus();
                }
            }, 500);
            
            this.isInitialized = true;
            
        } catch(err) {
            console.error('Initialization error:', err);
            const errorEl = document.getElementById('loader-error');
            if (errorEl) {
                errorEl.textContent = err.message || 'Failed to initialize';
                errorEl.style.display = 'block';
            }
        }
    }
}

document.addEventListener('DOMContentLoaded', () => {
    if (!window.Telegram?.WebApp) {
        document.body.innerHTML = '<div style="display:flex;align-items:center;justify-content:center;height:100vh;background:#0a0a0a;color:#6C63FF">Open from Telegram Mini App</div>';
        return;
    }
    window.app = new App();
    window.app.initialize();
});
