import React from 'react';

const About: React.FC = () => {
    const paragraphs = [
        "נעים להכיר, שמי שירה צוויג, מטפלת בגישת CBT (טיפול קוגניטיבי-התנהגותי).",
        "אני מלווה אנשים המתמודדים עם חרדות, לחצים, קשיים רגשיים ומשברי חיים, ומסייעת להם לייצר שינוי אמיתי ומעצים.",
        "טיפול CBT הוא טיפול ממוקד, קצר מועד ומבוסס מחקר, המעניק ארגז כלים מעשי לזיהוי דפוסי חשיבה מעכבים ולפיתוח דפוסי פעולה בריאים ומקדמים.",
        "בקליניקה נעימה, מכילה ובגובה העיניים, ניצור יחד מרחב בטוח ומותאם אישית בדרך להשגת שקט נפשי ואיכות חיים טובה יותר."
    ];

    return (
        <section id="about" className="py-8 sm:py-12 bg-[#FDFBF7]">
            <div className="container mx-auto px-4 sm:px-6 text-center max-w-3xl">
                <h2 className="text-3xl sm:text-4xl font-bold mb-2 text-stone-800">אודות</h2>
                <div className="w-12 h-1 bg-[#C98A68] mx-auto mb-5 rounded-full"></div>
                
                <div className="bg-white/90 border border-stone-200/80 rounded-2xl p-5 sm:p-7 shadow-sm text-right">
                    <div className="text-base sm:text-lg text-stone-700 leading-relaxed space-y-3 font-light">
                        {paragraphs.map((para, index) => (
                            <p key={index}>{para}</p>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
