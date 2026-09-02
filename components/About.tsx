import React from 'react';

const About: React.FC = () => {
    const text = `נעים להכיר, שמי שירה צוויג, מטפלת בגישת CBT (טיפול קוגניטיבי-התנהגותי).

אני מלווה אנשים המתמודדים עם חרדות, לחצים, קשיים רגשיים ומשברי חיים, ומסייעת להם לייצר שינוי אמיתי ומעצים.

טיפול CBT הוא טיפול ממוקד, קצר מועד ומבוסס מחקר, המעניק ארגז כלים מעשי לזיהוי דפוסי חשיבה מעכבים ולפיתוח דפוסי פעולה בריאים ומקדמים.

בקליניקה נעימה, מכילה ובגובה העיניים, ניצור יחד מרחב בטוח ומותאם אישית בדרך להשגת שקט נפשי ואיכות חיים טובה יותר.`;

    return (
        <section id="about" className="py-20 bg-white">
            <div className="container mx-auto px-6 text-center max-w-4xl">
                <h2 className="text-4xl font-bold mb-6 text-gray-800">אודות</h2>
                <div className="w-24 h-1 bg-yellow-500 mx-auto mb-10"></div>
                <div className="text-xl text-gray-600 leading-relaxed space-y-4">
                    {text.split('\n').map((line, index) => (
                        <p key={index}>{line || <br/>}</p> // Render a <br> for empty lines to create space
                    ))}
                </div>
            </div>
        </section>
    );
};

export default About;
