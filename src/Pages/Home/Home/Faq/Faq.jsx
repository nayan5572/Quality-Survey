
const Faq = () => {
    return (
        <div>
            <section className="dark:bg-gray-800 dark:text-gray-100">
                <div className="container flex flex-col justify-center px-4 py-8 mx-auto md:p-8">
                    <h2 className="text-2xl font-semibold sm:text-4xl">Frequently asked questions</h2>
                    <p className="mt-4 mb-8 dark:text-gray-400">SWelcome to our help center! Here you can find answers to questions frequently asked by our users.</p>

                    <div className="space-y-4">
                        <details className="w-full border rounded-lg">
                            <summary className="px-4 py-6 focus:outline-none focus-visible:ri">How can I become a member?</summary>
                            <p className="px-4 py-6 pt-0 ml-4 -mt-4 dark:text-gray-400">Note that registering for a membership is free of charge.
                                First, you need to choose your country on the homepage. Create your account with an email address that is the same as the address that you use for the chosen payment method. This step is important!
                                Fill in your profile with as much information as possible to receive the surveys fit for you. Additionally, you will be receiving surveys more often if your profile has more information.</p>
                        </details>
                        <details className="w-full border rounded-lg">
                            <summary className="px-4 py-6 focus:outline-none focus-visible:ri">Why is my postal code not accepted?</summary>
                            <p className="px-4 py-6 pt-0 ml-4 -mt-4 dark:text-gray-400">Please try to register one more time and make sure you have typed the postal code correctly. It should be typed manually, with no space in between You can find it on Google. If you still get the same message, send us a screenshot of the issue, and we will contact the department in charge to investigate it further.</p>
                        </details>
                        <details className="w-full border rounded-lg">
                            <summary className="px-4 py-6 focus:outline-none focus-visible:ri">Why am I not receiving any survey invitations?</summary>
                            <p className="px-4 py-6 pt-0 ml-4 -mt-4 dark:text-gray-400">The number of invitations you receive depends on the country that you live in. Participants in certain countries receive more invitations than panelists in some other locations. Also, participants are selected according to age, gender, habits, level of education, etc. All these requirements are set by marketing agencies that send surveys.
                                One thing that we do suggest is that you fill in your profile with as much information as possible. By doing that, you will receive the surveys that fit you best. Likewise, you will be receiving them more often if your profile contains more information.</p>
                        </details>
                        <details className="w-full border rounded-lg">
                            <summary className="px-4 py-6 focus:outline-none focus-visible:ri">Why am I not qualified for a survey?</summary>
                            <p className="px-4 py-6 pt-0 ml-4 -mt-4 dark:text-gray-400">For some surveys, a target group is set in advance based on certain characteristics that are not included in your profile with us. This is why it can occur that you are not part of a survey’s target group, even though you received an email invitation for the survey.
                                It is often the case that particular target groups are required for surveys. Sometimes, there is a “pre-survey” that consists of a small number of questions to check whether you fit the targeted group of examinees. If the computer realizes that you are not qualified to answer the questions of the survey in question, you will be taken out of the survey. This usually happens in the first few questions, and in very rare cases, later into the survey. In such circumstances, the survey isn’t registered.
                                We suggest that you fill in your profile with as much information as possible. Doing so will prevent this from happening to you again, and you will receive only the surveys suitable for you.</p>
                        </details>
                        <details className="w-full border rounded-lg">
                            <summary className="px-4 py-6 focus:outline-none focus-visible:ri">Why did I get an invitation for a closed survey?</summary>
                            <p className="px-4 py-6 pt-0 ml-4 -mt-4 dark:text-gray-400">We always invite more people than we need. This is because we cannot tell in advance how many people are going to take part in our surveys. Doing this is vital to guarantee our customers that the required number of participants is reached in a set amount of time.</p>
                        </details>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Faq;