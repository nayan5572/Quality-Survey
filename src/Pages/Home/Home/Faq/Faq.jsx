import { Disclosure } from "@headlessui/react";
import { ChevronUpIcon } from "@heroicons/react/20/solid";


const Faq = () => {
    return (
        <div>
            <section className="dark:bg-gray-800 dark:text-gray-100">
                <div className="container flex flex-col justify-center px-4 py-8 mx-auto md:p-8">
                    <div className="space-y-4">
                        
                    </div>
                </div>
            </section>

            <div className="w-full px-4 pt-16">
                <div className="container mx-auto">
                    <h2 className="text-2xl font-semibold sm:text-4xl font-bold">How can I become a member?</h2>
                    <p className="mt-4 mb-8 dark:text-gray-400">SWelcome to our help center! Here you can find answers to questions frequently asked by our users.</p>
                </div>
                <div className="mx-auto w-full max-w-md rounded-2xl bg-white p-2 space-y-4">
                    <Disclosure>
                        {({ open }) => (
                            <>
                                <Disclosure.Button className="flex w-full justify-between rounded-lg bg-purple-100 px-4 py-2 text-left text-sm font-medium text-purple-900 hover:bg-purple-200 focus:outline-none focus-visible:ring focus-visible:ring-purple-500/75">
                                    <span>How can I become a member?</span>
                                    <ChevronUpIcon
                                        className={`${open ? 'rotate-180 transform' : ''
                                            } h-5 w-5 text-purple-500`}
                                    />
                                </Disclosure.Button>
                                <Disclosure.Panel className="px-4 pb-2 pt-4 text-sm text-gray-500">
                                Note that registering for a membership is free of charge.
                                First, you need to choose your country on the homepage. Create your account with an email address that is the same as the address that you use for the chosen payment method. This step is important!
                                Fill in your profile with as much information as possible to receive the surveys fit for you. Additionally, you will be receiving surveys more often if your profile has more information.
                                </Disclosure.Panel>
                            </>
                        )}
                    </Disclosure>
                    <Disclosure>
                        {({ open }) => (
                            <>
                                <Disclosure.Button className="flex w-full justify-between rounded-lg bg-purple-100 px-4 py-2 text-left text-sm font-medium text-purple-900 hover:bg-purple-200 focus:outline-none focus-visible:ring focus-visible:ring-purple-500/75">
                                    <span>Why am I not receiving any survey invitations?</span>
                                    <ChevronUpIcon
                                        className={`${open ? 'rotate-180 transform' : ''
                                            } h-5 w-5 text-purple-500`}
                                    />
                                </Disclosure.Button>
                                <Disclosure.Panel className="px-4 pb-2 pt-4 text-sm text-gray-500">
                                Please try to register one more time and make sure you have typed the postal code correctly. It should be typed manually, with no space in between You can find it on Google. If you still get the same message, send us a screenshot of the issue, and we will contact the department in charge to investigate it further.
                                </Disclosure.Panel>
                            </>
                        )}
                    </Disclosure>
                    <Disclosure>
                        {({ open }) => (
                            <>
                                <Disclosure.Button className="flex w-full justify-between rounded-lg bg-purple-100 px-4 py-2 text-left text-sm font-medium text-purple-900 hover:bg-purple-200 focus:outline-none focus-visible:ring focus-visible:ring-purple-500/75">
                                    <span>Why is my postal code not accepted?</span>
                                    <ChevronUpIcon
                                        className={`${open ? 'rotate-180 transform' : ''
                                            } h-5 w-5 text-purple-500`}
                                    />
                                </Disclosure.Button>
                                <Disclosure.Panel className="px-4 pb-2 pt-4 text-sm text-gray-500">
                                The number of invitations you receive depends on the country that you live in. Participants in certain countries receive more invitations than panelists in some other locations. Also, participants are selected according to age, gender, habits, level of education, etc. All these requirements are set by marketing agencies that send surveys.
                                One thing that we do suggest is that you fill in your profile with as much information as possible. By doing that, you will receive the surveys that fit you best. Likewise, you will be receiving them more often if your profile contains more information.
                                </Disclosure.Panel>
                            </>
                        )}
                    </Disclosure>
                    <Disclosure>
                        {({ open }) => (
                            <>
                                <Disclosure.Button className="flex w-full justify-between rounded-lg bg-purple-100 px-4 py-2 text-left text-sm font-medium text-purple-900 hover:bg-purple-200 focus:outline-none focus-visible:ring focus-visible:ring-purple-500/75">
                                    <span>Why am I not qualified for a survey?</span>
                                    <ChevronUpIcon
                                        className={`${open ? 'rotate-180 transform' : ''
                                            } h-5 w-5 text-purple-500`}
                                    />
                                </Disclosure.Button>
                                <Disclosure.Panel className="px-4 pb-2 pt-4 text-sm text-gray-500">
                                For some surveys, a target group is set in advance based on certain characteristics that are not included in your profile with us. This is why it can occur that you are not part of a survey’s target group, even though you received an email invitation for the survey.
                                It is often the case that particular target groups are required for surveys. Sometimes, there is a “pre-survey” that consists of a small number of questions to check whether you fit the targeted group of examinees. If the computer realizes that you are not qualified to answer the questions of the survey in question, you will be taken out of the survey. This usually happens in the first few questions, and in very rare cases, later into the survey. In such circumstances, the survey isn’t registered.
                                We suggest that you fill in your profile with as much information as possible. Doing so will prevent this from happening to you again, and you will receive only the surveys suitable for you.
                                </Disclosure.Panel>
                            </>
                        )}
                    </Disclosure>
                    <Disclosure>
                        {({ open }) => (
                            <>
                                <Disclosure.Button className="flex w-full justify-between rounded-lg bg-purple-100 px-4 py-2 text-left text-sm font-medium text-purple-900 hover:bg-purple-200 focus:outline-none focus-visible:ring focus-visible:ring-purple-500/75">
                                    <span>Why did I get an invitation for a closed survey?</span>
                                    <ChevronUpIcon
                                        className={`${open ? 'rotate-180 transform' : ''
                                            } h-5 w-5 text-purple-500`}
                                    />
                                </Disclosure.Button>
                                <Disclosure.Panel className="px-4 pb-2 pt-4 text-sm text-gray-500">
                                We always invite more people than we need. This is because we cannot tell in advance how many people are going to take part in our surveys. Doing this is vital to guarantee our customers that the required number of participants is reached in a set amount of time.
                                </Disclosure.Panel>
                            </>
                        )}
                    </Disclosure>
                </div>
            </div>
        </div>
    );
};

export default Faq;