"use client";
import React from "react";
import { Avatar, Typography, Card } from "antd";

const { Title, Paragraph } = Typography;

interface TestimonialProps {
    name: string;
    avatar: string;
    text: string;
}

const Testimonial: React.FC<TestimonialProps> = ({ name, avatar, text }) => {
    return (
        <Card className="max-w-sm rounded-lg shadow-md p-4">
            <div className="flex items-center">
                <Avatar size={100} src={avatar} alt={name} />
                <div className="ml-4">
                    <Title level={4}>{name}</Title>
                    <Paragraph>{text}</Paragraph>
                </div>
            </div>
        </Card>
    );
};

const Testimonials: React.FC = () => {
    const testimonials = [
        {
            name: "John Doe",
            avatar: "https://media.licdn.com/dms/image/C5103AQFl656k2-DwOg/profile-displayphoto-shrink_800_800/0/1517034956958?e=2147483647&v=beta&t=6H_aZri3qcbtlgwTyTKBceuyTEPYW43xGViq5UL4J-w",
            text: "Great product and excellent service !",
        },
        {
            name: "Jane Smith",
            avatar: "https://media.licdn.com/dms/image/C5603AQFfEMNEy6z_GQ/profile-displayphoto-shrink_800_800/0/1613054135455?e=2147483647&v=beta&t=kktimDgDBF1MTIUpXcQhjqP1NSZfMzbw2vWqvIpJpTo",
            text: "I love shopping here. Everything is top-notch !",
        },
        {
            name: "John Smith",
            avatar: "https://flxt.tmsimg.com/assets/816634_v9_bc.jpg",
            text: "I love products it is very beautiful and is the fast delievery !",
        },
        // Add more testimonials as needed
    ];

    return (
        <div className=" justify-around mx-auto p-4 flex flex-col pt-[30px] mb-[50px]">
            <h2 className="text-3xl font-semibold mb-4 text-center">Testimonials</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {testimonials.map((testimonial, index) => {
                    return (
                        <div key={index}>
                            <Testimonial key={index} {...testimonial} />
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default Testimonials;
