import React from 'react';

const About: React.FC = () => {
    const text = `נעים להכיר, שמי שירה צוויג, מטפלת בגישת CBT (טיפול קוגניטיבי-התנהגותי).

אני מלווה אנשים המתמודדים עם חרדות, לחצים, קשיים רגשיים ומשברי חיים, ומסייעת להם לייצר שינוי אמיתי ומעצים.

טיפול CBT הוא טיפול ממוקד, קצר מועד ומבוסס מחקר, המעניק ארגז כלים מעשי לזיהוי דפוסי חשיבה מעכבים ולפיתוח דפוסי פעולה בריאים ומקדמים.

בקליניקה נעימה, מכילה ובגובה העיניים, ניצור יחד מרחב בטוח ומותאם אישית בדרך להשגת שקט נפשי ואיכות חיים טובה יותר.`;

    return (
        <section id="about" className="py-24 bg-[#FDFBF7]">
            <div className="container mx-auto px-6 text-center max-w-3xl">
                <h2 className="text-4xl font-bold mb-4 text-stone-800">אודות</h2>
                <div className="w-16 h-1 bg-[#C98A68] mx-auto mb-12 rounded-full"></div>
                
                <div className="bg-white/90 border border-stone-200/80 rounded-3xl p-8 sm:p-12 shadow-sm text-right">
                    <div className="text-lg sm:text-xl text-stone-700 leading-relaxed space-y-4 font-light">
                        {text.split('\n').map((line, index) => (
                            <p key={index}>{line || <br/>}</p>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
