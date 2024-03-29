import type { LinkDescriptor } from "@remix-run/node";
import {
  Accordion,
  Alert,
  Avatar,
  Badge,
  Button,
  Card,
  Carousel,
  Checkbox,
  Dropdown,
  Footer,
  Label,
  ListGroup,
  Modal,
  Navbar,
  Pagination,
  Progress,
  Rating,
  Sidebar,
  Spinner,
  Table,
  Tabs,
  TextInput,
  Toast,
  Tooltip,
} from "flowbite-react";
import React, { useState } from "react";
import { BiBuoy } from "react-icons/bi";
import {
  HiAdjustments,
  HiArrowSmRight,
  HiChartPie,
  HiCheck,
  HiClipboardList,
  HiCloudDownload,
  HiDatabase,
  HiExclamation,
  HiEye,
  HiInbox,
  HiOutlineAdjustments,
  HiShoppingBag,
  HiTable,
  HiUser,
  HiUserCircle,
  HiViewBoards,
  HiX,
} from "react-icons/hi";
import styles from "~/styles.css";

export function links(): LinkDescriptor[] {
  return [
    {
      href: styles,
      rel: "stylesheet",
    },
  ];
}

export default function Index(): JSX.Element {
  return (
    <>
      <Header />
      <div className="flex h-full min-h-screen w-full">
        <OurSidebar />
        <main className="flex-1 p-6">
          <HomePage />
        </main>
      </div>
    </>
  );
}

function Header(): JSX.Element {
  return (
    <Navbar fluid rounded>
      <Navbar.Brand href="/">
        <img alt="Flowbite logo" height="24" src="/favicon.png" width="24" />
        <span className="self-center whitespace-nowrap px-3 text-xl font-semibold dark:text-white">
          Flowbite
        </span>
      </Navbar.Brand>
      <div className="flex md:order-2">
        <Button>Get started</Button>
        <Navbar.Toggle />
      </div>
      <Navbar.Collapse>
        <Navbar.Link href="/" active>
          Home
        </Navbar.Link>
        <Navbar.Link href="/">About</Navbar.Link>
        <Navbar.Link href="/">Services</Navbar.Link>
        <Navbar.Link href="/">Pricing</Navbar.Link>
        <Navbar.Link href="/">Contact</Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
  );
}

function OurSidebar(): JSX.Element {
  return (
    <Sidebar collapsed={false}>
      <Sidebar.Items>
        <Sidebar.ItemGroup>
          <Sidebar.Item href="#" icon={HiChartPie}>
            Dashboard
          </Sidebar.Item>
          <Sidebar.Item href="#" icon={HiViewBoards}>
            Kanban
          </Sidebar.Item>
          <Sidebar.Item href="#" icon={HiInbox}>
            Inbox
          </Sidebar.Item>
          <Sidebar.Item href="#" icon={HiUser}>
            Users
          </Sidebar.Item>
          <Sidebar.Item href="#" icon={HiShoppingBag}>
            Products
          </Sidebar.Item>
          <Sidebar.Item href="#" icon={HiArrowSmRight}>
            Sign In
          </Sidebar.Item>
          <Sidebar.Item href="#" icon={HiTable}>
            Sign Up
          </Sidebar.Item>
        </Sidebar.ItemGroup>
        <Sidebar.ItemGroup>
          <Sidebar.Item href="#" icon={HiChartPie}>
            Upgrade to Pro
          </Sidebar.Item>
          <Sidebar.Item href="#" icon={HiViewBoards}>
            Documentation
          </Sidebar.Item>
          <Sidebar.Item href="#" icon={BiBuoy}>
            Help
          </Sidebar.Item>
        </Sidebar.ItemGroup>
      </Sidebar.Items>
    </Sidebar>
  );
}

function HomePage(): JSX.Element {
  return (
    <>
      <section>
        <header>
          <h1 className="mb-6 text-5xl font-extrabold">
            Welcome to <code>Flowbite</code> on <code>Next.js</code>!
          </h1>
        </header>
      </section>
      <section>
        <header>
          <h2 className="mb-3 text-4xl font-bold">Alert</h2>
        </header>
        <AlertsExample />
      </section>
      <section>
        <header>
          <h2 className="mt-9 mb-3 text-4xl font-bold">Accordion</h2>
        </header>
        <AccordionExample />
      </section>
      <section>
        <header>
          <h2 className="mt-9 mb-3 text-4xl font-bold">Avatar</h2>
        </header>
        <AvatarExample />
      </section>
      <section>
        <header>
          <h2 className="mt-9 mb-3 text-4xl font-bold">Badges</h2>
        </header>
        <BadgesExample />
      </section>
      <section>
        <header>
          <h2 className="mt-9 mb-3 text-4xl font-bold">Breadcrumb</h2>
        </header>
        {/* <BreadcrumbExample /> */}
      </section>
      <section>
        <header>
          <h2 className="mt-9 mb-3 text-4xl font-bold">Buttons</h2>
        </header>
        <ButtonsExample />
      </section>
      <section>
        <header>
          <h2 className="mt-9 mb-3 text-4xl font-bold">Button group</h2>
        </header>
        <ButtonGroupExample />
      </section>
      <section>
        <header>
          <h2 className="mt-9 mb-3 text-4xl font-bold">Card</h2>
        </header>
        <CardExample />
      </section>
      <section>
        <header>
          <h2 className="mt-9 mb-3 text-4xl font-bold">Carousel</h2>
        </header>
        <CarouselExample />
      </section>
      <section>
        <header>
          <h2 className="mt-9 mb-3 text-4xl font-bold">Dropdown</h2>
        </header>
        <DropdownExample />
      </section>
      <section>
        <header>
          <h2 className="mt-9 mb-3 text-4xl font-bold">Forms</h2>
        </header>
        <FormsExample />
      </section>
      <section>
        <header>
          <h2 className="mt-9 mb-3 text-4xl font-bold">Footer</h2>
        </header>
        <FooterExample />
      </section>
      <section>
        <header>
          <h2 className="mt-9 mb-3 text-4xl font-bold">List group</h2>
        </header>
        <ListGroupExample />
      </section>
      <section>
        <header>
          <h2 className="mt-9 mb-3 text-4xl font-bold">Modal</h2>
        </header>
        <ModalExample />
      </section>
      <section>
        <header>
          <h2 className="mt-9 mb-3 text-4xl font-bold">Navbars</h2>
        </header>
        <NavbarsExample />
      </section>
      <section>
        <header>
          <h2 className="mt-9 mb-3 text-4xl font-bold">Pagination</h2>
        </header>
        <PaginationExample />
      </section>
      <section>
        <header>
          <h2 className="mt-9 mb-3 text-4xl font-bold">Progress</h2>
        </header>
        <ProgressExample />
      </section>
      <section>
        <header>
          <h2 className="mt-9 mb-3 text-4xl font-bold">Rating</h2>
        </header>
        <RatingExample />
      </section>
      <section>
        <header>
          <h2 className="my-6 text-4xl font-bold">Sidebar</h2>
        </header>
        <SidebarExample />
      </section>
      <section>
        <header>
          <h2 className="mt-9 mb-3 text-4xl font-bold">Spinners</h2>
        </header>
        <SpinnersExample />
      </section>
      <section>
        <header>
          <h2 className="mt-9 mb-3 text-4xl font-bold">Tables</h2>
        </header>
        <TablesExample />
      </section>
      <section>
        <header>
          <h2 className="my-6 text-4xl font-bold">Tabs</h2>
        </header>
        <TabsExample />
      </section>
      <section>
        <header>
          <h2 className="my-6 text-4xl font-bold">Toast</h2>
        </header>
        <ToastExample />
      </section>
      <section>
        <header>
          <h2 className="my-6 text-4xl font-bold">Tooltips</h2>
        </header>
        <TooltipsExample />
      </section>
    </>
  );
}

function AccordionExample(): JSX.Element {
  return (
    <Accordion flush>
      <Accordion.Panel open>
        <Accordion.Title arrowIcon={undefined}>
          What is Flowbite?
        </Accordion.Title>
        <Accordion.Content>
          <p className="mb-2 text-gray-500 dark:text-gray-400">
            Flowbite is an open-source library of interactive components built
            on top of Tailwind CSS including buttons, dropdowns, modals,
            navbars, and more.
          </p>
          <p className="text-gray-500 dark:text-gray-400">
            Check out this guide to learn how to{" "}
            <a
              href="https://flowbite.com/docs/getting-started/introduction/"
              className="text-blue-600 hover:underline dark:text-blue-500"
            >
              get started
            </a>{" "}
            and start developing websites even faster with components on top of
            Tailwind CSS.
          </p>
        </Accordion.Content>
      </Accordion.Panel>
      <Accordion.Panel>
        <Accordion.Title arrowIcon={undefined}>
          Is there a Figma file available?
        </Accordion.Title>
        <Accordion.Content>
          <p className="mb-2 text-gray-500 dark:text-gray-400">
            Flowbite is first conceptualized and designed using the Figma
            software so everything you see in the library has a design
            equivalent in our Figma file.
          </p>
          <p className="text-gray-500 dark:text-gray-400">
            Check out the{" "}
            <a
              href="https://flowbite.com/figma/"
              className="text-blue-600 hover:underline dark:text-blue-500"
            >
              Figma design system
            </a>{" "}
            based on the utility classes from Tailwind CSS and components from
            Flowbite.
          </p>
        </Accordion.Content>
      </Accordion.Panel>
      <Accordion.Panel>
        <Accordion.Title arrowIcon={undefined}>
          What are the differences between Flowbite and Tailwind UI?
        </Accordion.Title>
        <Accordion.Content>
          <p className="mb-2 text-gray-500 dark:text-gray-400">
            The main difference is that the core components from Flowbite are
            open source under the MIT license, whereas Tailwind UI is a paid
            product. Another difference is that Flowbite relies on smaller and
            standalone components, whereas Tailwind UI offers sections of pages.
          </p>
          <p className="mb-2 text-gray-500 dark:text-gray-400">
            However, we actually recommend using both Flowbite, Flowbite Pro,
            and even Tailwind UI as there is no technical reason stopping you
            from using the best of two worlds.
          </p>
          <p className="mb-2 text-gray-500 dark:text-gray-400">
            Learn more about these technologies:
          </p>
          <ul className="list-disc pl-5 text-gray-500 dark:text-gray-400">
            <li>
              <a
                href="https://flowbite.com/pro/"
                className="text-blue-600 hover:underline dark:text-blue-500"
              >
                Flowbite Pro
              </a>
            </li>
            <li>
              <a
                href="https://tailwindui.com/"
                rel="nofollow"
                className="text-blue-600 hover:underline dark:text-blue-500"
              >
                Tailwind UI
              </a>
            </li>
          </ul>
        </Accordion.Content>
      </Accordion.Panel>
    </Accordion>
  );
}

function AlertsExample(): JSX.Element {
  return (
    <Alert
      color="green"
      rounded={false}
      withBorderAccent
      onDismiss={console.log}
      additionalContent={
        <React.Fragment>
          <div className="mt-2 mb-4 text-sm text-green-700 dark:text-green-800">
            More info about this info alert goes here. This example text is
            going to run a bit longer so that you can see how spacing within an
            alert works with this kind of content.
          </div>
          <div className="flex">
            <button
              type="button"
              className="mr-2 inline-flex items-center rounded-lg bg-green-700 px-3 py-1.5 text-center text-xs font-medium text-white hover:bg-green-800 focus:ring-4 focus:ring-green-300 dark:bg-green-800 dark:hover:bg-green-900"
            >
              <HiEye className="-ml-0.5 mr-2 h-4 w-4" />
              View more
            </button>
            <button
              type="button"
              className="rounded-lg border border-green-700 bg-transparent px-3 py-1.5 text-center text-xs font-medium text-green-700 hover:bg-green-800 hover:text-white focus:ring-4 focus:ring-green-300 dark:border-green-800 dark:text-green-800 dark:hover:text-white"
            >
              Dismiss
            </button>
          </div>
        </React.Fragment>
      }
    >
      <h3 className="text-lg font-medium text-green-700 dark:text-green-800">
        This is a info alert
      </h3>
    </Alert>
  );
}

function AvatarExample(): JSX.Element {
  return (
    <Avatar
      img="https://flowbite.com/docs/images/people/profile-picture-5.jpg"
      rounded
      bordered
    />
  );
}

function BadgesExample(): JSX.Element {
  return (
    <div className="flex flex-wrap gap-2">
      <Badge color="blue" size="sm">
        Default
      </Badge>
      <Badge color="gray" size="sm">
        Dark
      </Badge>
      <Badge color="red" size="sm">
        Red
      </Badge>
      <Badge color="green" size="sm">
        Green
      </Badge>
      <Badge color="yellow" size="sm">
        Yellow
      </Badge>
      <Badge color="indigo" size="sm">
        Indigo
      </Badge>
      <Badge color="purple" size="sm">
        Purple
      </Badge>
      <Badge color="pink" size="sm">
        Pink
      </Badge>
    </div>
  );
}

function ButtonsExample(): JSX.Element {
  return (
    <div className="flex flex-wrap items-center gap-2">
      <Button outline gradientDuoTone="purpleToBlue">
        Purple to Blue
      </Button>
      <Button outline gradientDuoTone="cyanToBlue">
        Cyan to Blue
      </Button>
      <Button outline gradientDuoTone="greenToBlue">
        Green to Blue
      </Button>
      <Button outline gradientDuoTone="purpleToPink">
        Purple to Pink
      </Button>
      <Button outline gradientDuoTone="pinkToOrange">
        Pink to Orange
      </Button>
      <Button outline gradientDuoTone="tealToLime">
        Teal to Lime
      </Button>
      <Button outline gradientDuoTone="redToYellow">
        Red to Yellow
      </Button>
    </div>
  );
}

function ButtonGroupExample(): JSX.Element {
  return (
    <Button.Group>
      <Button color="alternative">
        <HiUserCircle className="mr-3 h-4 w-4" /> Profile
      </Button>
      <Button color="alternative">
        <HiAdjustments className="mr-3 h-4 w-4" /> Settings
      </Button>
      <Button color="alternative">
        <HiCloudDownload className="mr-3 h-4 w-4" /> Messages
      </Button>
    </Button.Group>
  );
}

function CardExample(): JSX.Element {
  return (
    <Card
      className="max-w-sm"
      imgAlt="Meaningful alt text for an image that is not purely decorative"
      imgSrc="https://flowbite.com/docs/images/blog/image-1.jpg"
    >
      <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
        Noteworthy technology acquisitions 2021
      </h5>
      <p className="font-normal text-gray-700 dark:text-gray-400">
        Here are the biggest enterprise technology acquisitions of 2021 so far,
        in reverse chronological order.
      </p>
    </Card>
  );
}

function CarouselExample(): JSX.Element {
  return (
    <Carousel>
      <img
        alt="..."
        src="https://flowbite.com/docs/images/carousel/carousel-1.svg"
      />
      <img
        alt="..."
        src="https://flowbite.com/docs/images/carousel/carousel-2.svg"
      />
      <img
        alt="..."
        src="https://flowbite.com/docs/images/carousel/carousel-3.svg"
      />
      <img
        alt="..."
        src="https://flowbite.com/docs/images/carousel/carousel-4.svg"
      />
      <img
        alt="..."
        src="https://flowbite.com/docs/images/carousel/carousel-5.svg"
      />
    </Carousel>
  );
}

function DropdownExample(): JSX.Element {
  return (
    <Dropdown label="Dropdown button">
      <Dropdown.Header>
        <span className="block text-sm">Bonnie Green</span>
        <span className="block truncate text-sm font-medium">
          name@flowbite.com
        </span>
      </Dropdown.Header>
      <Dropdown.Item>Dashboard</Dropdown.Item>
      <Dropdown.Item>Settings</Dropdown.Item>
      <Dropdown.Item>Earnings</Dropdown.Item>
      <Dropdown.Divider />
      <Dropdown.Item>Sign out</Dropdown.Item>
    </Dropdown>
  );
}

function FormsExample(): JSX.Element {
  return (
    <form className="flex flex-col gap-4">
      <div>
        <Label className="mb-2 block" htmlFor="email1">
          Your email
        </Label>
        <TextInput
          id="email1"
          type="email"
          placeholder="name@flowbite.com"
          required
        />
      </div>
      <div>
        <Label className="mb-2 block" htmlFor="password1">
          Your password
        </Label>
        <TextInput id="password1" type="password" required />
      </div>
      <div className="flex items-center gap-2">
        <Checkbox id="remember" />
        <Label htmlFor="remember">Remember me</Label>
      </div>
      <Button type="submit">Submit</Button>
    </form>
  );
}

function FooterExample(): JSX.Element {
  return (
    <Footer className="flex flex-col">
      <div className="grid w-full justify-between sm:flex sm:justify-between md:flex md:grid-cols-1">
        <div>
          <Footer.Brand
            href="https://flowbite.com"
            src="https://flowbite.com/docs/images/logo.svg"
            alt="Flowbite Logo"
            name="Flowbite"
            className="m-6"
          />
        </div>
        <div className="grid grid-cols-2 gap-8 sm:mt-4 sm:grid-cols-3 sm:gap-6">
          <div>
            <h2 className="mb-6 text-sm font-semibold uppercase text-gray-900 dark:text-white">
              About
            </h2>
            <Footer.LinkGroup className="flex-col">
              <Footer.Link className="mb-4" href="#">
                Flowbite
              </Footer.Link>
              <Footer.Link className="mb-4" href="#">
                Tailwind CSS
              </Footer.Link>
            </Footer.LinkGroup>
          </div>
          <div>
            <h2 className="mb-6 text-sm font-semibold uppercase text-gray-900 dark:text-white">
              Follow us
            </h2>
            <Footer.LinkGroup className="flex-col">
              <Footer.Link className="mb-4" href="#">
                Gihub
              </Footer.Link>
              <Footer.Link className="mb-4" href="#">
                Discord
              </Footer.Link>
            </Footer.LinkGroup>
          </div>
          <div>
            <h2 className="mb-6 text-sm font-semibold uppercase text-gray-900 dark:text-white">
              Legal
            </h2>
            <Footer.LinkGroup className="flex-col">
              <Footer.Link className="mb-4" href="#">
                Privacy Policy
              </Footer.Link>
              <Footer.Link className="mb-4" href="#">
                Terms & Conditions
              </Footer.Link>
            </Footer.LinkGroup>
          </div>
        </div>
      </div>
      <hr className="mt-9 mb-3 w-full border-gray-200 p-1 dark:border-gray-700 sm:mx-auto lg:my-8" />
      <div className="w-full sm:flex sm:items-center sm:justify-between">
        <Footer.Copyright href="#" by="Flowbite™" year={2022} />
        <div className="mt-4 flex space-x-6 sm:mt-0 sm:justify-center">
          <Footer.Icon
            href="#"
            className="text-gray-400 hover:text-gray-900"
            icon={HiAdjustments}
          />
          <Footer.Icon
            href="#"
            className="text-gray-400 hover:text-gray-900"
            icon={HiArrowSmRight}
          />
          <Footer.Icon
            href="#"
            className="text-gray-400 hover:text-gray-900"
            icon={HiChartPie}
          />
          <Footer.Icon
            href="#"
            className="text-gray-400 hover:text-gray-900"
            icon={HiCloudDownload}
          />
          <Footer.Icon
            href="#"
            className="text-gray-400 hover:text-gray-900"
            icon={HiEye}
          />
        </div>
      </div>
    </Footer>
  );
}

function ListGroupExample(): JSX.Element {
  return (
    <ListGroup className="w-48">
      <ListGroup.Item active icon={HiUserCircle}>
        Profile
      </ListGroup.Item>
      <ListGroup.Item icon={HiOutlineAdjustments}>Settings</ListGroup.Item>
      <ListGroup.Item icon={HiInbox}>Messages</ListGroup.Item>
      <ListGroup.Item icon={HiCloudDownload}>Download</ListGroup.Item>
    </ListGroup>
  );
}

function ModalExample(): JSX.Element {
  const [isOpen, setOpen] = useState(false);

  return (
    <>
      <Button onClick={() => setOpen(true)}>Toggle modal</Button>
      <Modal show={isOpen} size="md" popup onClose={() => setOpen(false)}>
        <Modal.Header />
        <Modal.Body className="space-y-6 px-6 pb-4 sm:pb-6 lg:px-8 xl:pb-8">
          <h3 className="text-xl font-medium text-gray-900 dark:text-white">
            Sign in to our platform
          </h3>
          <div>
            <Label className="mb-2 block" htmlFor="email">
              Your email
            </Label>
            <TextInput
              id="email"
              className="dark:border-gray-500 dark:bg-gray-600"
              placeholder="name@company.com"
              required
            />
          </div>
          <div>
            <Label className="mb-2 block" htmlFor="password">
              Your password
            </Label>
            <TextInput
              id="password"
              className="dark:border-gray-500 dark:bg-gray-600"
              type="password"
              required
            />
          </div>
          <div className="flex justify-between">
            <div className="flex items-center gap-2">
              <Checkbox
                id="remember"
                className="dark:border-gray-500 dark:bg-gray-600"
              />
              <Label htmlFor="remember">Remember me</Label>
            </div>
            <a
              href="/modal"
              className="text-sm text-blue-700 hover:underline dark:text-blue-500"
            >
              Lost Password?
            </a>
          </div>
          <Button className="w-full">Log in to your account</Button>
          <div className="text-sm font-medium text-gray-500 dark:text-gray-300">
            Not registered?{" "}
            <a
              href="/modal"
              className="text-blue-700 hover:underline dark:text-blue-500"
            >
              Create account
            </a>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
}

function NavbarsExample(): JSX.Element {
  return (
    <Navbar fluid rounded>
      <Navbar.Brand href="https://flowbite.com/">
        <img
          alt="Flowbite Logo"
          src="https://flowbite.com/docs/images/logo.svg"
          className="mr-3 h-6 sm:h-9"
        />
        <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
          Flowbite
        </span>
      </Navbar.Brand>
      <div className="flex md:order-2">
        <Dropdown
          arrowIcon={false}
          inline
          label={
            <Avatar
              alt="User settings"
              img="https://flowbite.com/docs/images/people/profile-picture-5.jpg"
              rounded
            />
          }
        >
          <Dropdown.Header>
            <span className="block text-sm">Bonnie Green</span>
            <span className="block truncate text-sm font-medium">
              name@flowbite.com
            </span>
          </Dropdown.Header>
          <Dropdown.Item>Dashboard</Dropdown.Item>
          <Dropdown.Item>Settings</Dropdown.Item>
          <Dropdown.Item>Earnings</Dropdown.Item>
          <Dropdown.Divider />
          <Dropdown.Item>Sign out</Dropdown.Item>
        </Dropdown>
        <Navbar.Toggle />
      </div>
      <Navbar.Collapse>
        <Navbar.Link href="/navbars" active>
          Home
        </Navbar.Link>
        <Navbar.Link href="/navbars">About</Navbar.Link>
        <Navbar.Link href="/navbars">Services</Navbar.Link>
        <Navbar.Link href="/navbars">Pricing</Navbar.Link>
        <Navbar.Link href="/navbars">Contact</Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
  );
}

function PaginationExample(): JSX.Element {
  return (
    <div className="flex items-center justify-center text-center">
      <Pagination
        currentPage={1}
        layout="table"
        onPageChange={console.log}
        showIcons
        totalPages={1000}
      />
    </div>
  );
}

function ProgressExample(): JSX.Element {
  return (
    <Progress
      progress={45}
      label="Flowbite"
      labelPosition="outside"
      labelProgress
    />
  );
}

function RatingExample(): JSX.Element {
  return (
    <>
      <Rating>
        <Rating.Star />
        <Rating.Star />
        <Rating.Star />
        <Rating.Star />
        <Rating.Star filled={false} />
        <p className="ml-2 text-sm font-medium text-gray-500 dark:text-gray-400">
          4.95 out of 5
        </p>
      </Rating>
      <p className="text-sm font-medium text-gray-500 dark:text-gray-400">
        1,745 global ratings
      </p>
      <Rating.Advanced percentFilled={70}>5 star</Rating.Advanced>
      <Rating.Advanced percentFilled={17}>4 star</Rating.Advanced>
      <Rating.Advanced percentFilled={8}>3 star</Rating.Advanced>
      <Rating.Advanced percentFilled={4}>2 star</Rating.Advanced>
      <Rating.Advanced percentFilled={1}>1 star</Rating.Advanced>
    </>
  );
}

function SidebarExample(): JSX.Element {
  const [isOpen, setOpen] = useState(false);

  return (
    <>
      <Button onClick={() => setOpen(true)}>Toggle sidebar</Button>
      <Sidebar
        aria-label="Example sidebar"
        collapsed={isOpen}
        className="!bg-gray-50"
      >
        <Sidebar.Items>
          <Sidebar.ItemGroup>
            <Sidebar.Item href="#" icon={HiChartPie}>
              Dashboard
            </Sidebar.Item>
            <Sidebar.Item
              href="#"
              icon={HiViewBoards}
              label="Pro"
              labelColor="gray"
            >
              Kanban
            </Sidebar.Item>
            <Sidebar.Item href="#" icon={HiInbox} label="3">
              Inbox
            </Sidebar.Item>
            <Sidebar.Item href="#" icon={HiUser}>
              Users
            </Sidebar.Item>
            <Sidebar.Item href="#" icon={HiShoppingBag}>
              Products
            </Sidebar.Item>
            <Sidebar.Item href="#" icon={HiArrowSmRight}>
              Sign In
            </Sidebar.Item>
            <Sidebar.Item href="#" icon={HiTable}>
              Sign Up
            </Sidebar.Item>
          </Sidebar.ItemGroup>
        </Sidebar.Items>
      </Sidebar>
    </>
  );
}

function SpinnersExample(): JSX.Element {
  return (
    <div className="flex flex-wrap gap-2">
      <Spinner color="blue" aria-label="Blue spinner example" />
      <Spinner color="green" aria-label="Green spinner example" />
      <Spinner color="red" aria-label="Red spinner example" />
      <Spinner color="yellow" aria-label="Yellow spinner example" />
      <Spinner color="pink" aria-label="Pink spinner example" />
      <Spinner color="purple" aria-label="Purple spinner example" />
    </div>
  );
}

function TablesExample(): JSX.Element {
  return (
    <Table striped>
      <Table.Head>
        <Table.HeadCell>Product name</Table.HeadCell>
        <Table.HeadCell>Color</Table.HeadCell>
        <Table.HeadCell>Category</Table.HeadCell>
        <Table.HeadCell>Price</Table.HeadCell>
        <Table.HeadCell>
          <span className="sr-only">Edit</span>
        </Table.HeadCell>
      </Table.Head>
      <Table.Body className="divide-y">
        <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
          <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
            Apple MacBook Pro 17&quot;
          </Table.Cell>
          <Table.Cell>Sliver</Table.Cell>
          <Table.Cell>Laptop</Table.Cell>
          <Table.Cell>$2999</Table.Cell>
          <Table.Cell>
            <a
              href="/tables"
              className="font-medium text-blue-600 hover:underline dark:text-blue-500"
            >
              Edit
            </a>
          </Table.Cell>
        </Table.Row>
        <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
          <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
            Microsoft Surface Pro
          </Table.Cell>
          <Table.Cell>White</Table.Cell>
          <Table.Cell>Laptop PC</Table.Cell>
          <Table.Cell>$1999</Table.Cell>
          <Table.Cell>
            <a
              href="/tables"
              className="font-medium text-blue-600 hover:underline dark:text-blue-500"
            >
              Edit
            </a>
          </Table.Cell>
        </Table.Row>
        <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
          <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
            Magic Mouse 2
          </Table.Cell>
          <Table.Cell>Black</Table.Cell>
          <Table.Cell>Accessories</Table.Cell>
          <Table.Cell>$99</Table.Cell>
          <Table.Cell>
            <a
              href="/tables"
              className="font-medium text-blue-600 hover:underline dark:text-blue-500"
            >
              Edit
            </a>
          </Table.Cell>
        </Table.Row>
        <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
          <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
            Google Pixel Phone
          </Table.Cell>
          <Table.Cell>Gray</Table.Cell>
          <Table.Cell>Phone</Table.Cell>
          <Table.Cell>$799</Table.Cell>
          <Table.Cell>
            <a
              href="/tables"
              className="font-medium text-blue-600 hover:underline dark:text-blue-500"
            >
              Edit
            </a>
          </Table.Cell>
        </Table.Row>
        <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
          <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
            Apple Watch 5
          </Table.Cell>
          <Table.Cell>Red</Table.Cell>
          <Table.Cell>Wearables</Table.Cell>
          <Table.Cell>$999</Table.Cell>
          <Table.Cell>
            <a
              href="/tables"
              className="font-medium text-blue-600 hover:underline dark:text-blue-500"
            >
              Edit
            </a>
          </Table.Cell>
        </Table.Row>
      </Table.Body>
    </Table>
  );
}

function TabsExample(): JSX.Element {
  return (
    <Tabs.Group aria-label="Tabs with icons">
      <Tabs.Item title="Profile" icon={HiUserCircle}>
        Profile content
      </Tabs.Item>
      <Tabs.Item active={true} title="Dashboard" icon={HiDatabase}>
        Dashboard content
      </Tabs.Item>
      <Tabs.Item title="Settings" icon={HiAdjustments}>
        Settings content
      </Tabs.Item>
      <Tabs.Item title="Contacts" icon={HiClipboardList}>
        Contacts content
      </Tabs.Item>
      <Tabs.Item disabled={true} title="Disabled">
        Disabled content
      </Tabs.Item>
    </Tabs.Group>
  );
}

function ToastExample(): JSX.Element {
  return (
    <div className="flex flex-col gap-4">
      <Toast>
        <div className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-green-100 text-green-500 dark:bg-green-800 dark:text-green-200">
          <HiCheck className="h-5 w-5" />
        </div>
        <div className="ml-3 text-sm font-normal">Item moved successfully.</div>
        <Toast.Toggle />
      </Toast>
      <Toast>
        <div className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-red-100 text-red-500 dark:bg-red-800 dark:text-red-200">
          <HiX className="h-5 w-5" />
        </div>
        <div className="ml-3 text-sm font-normal">Item has been deleted.</div>
        <Toast.Toggle />
      </Toast>
      <Toast>
        <div className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-orange-100 text-orange-500 dark:bg-orange-700 dark:text-orange-200">
          <HiExclamation className="h-5 w-5" />
        </div>
        <div className="ml-3 text-sm font-normal">
          Improve password difficulty.
        </div>
        <Toast.Toggle />
      </Toast>
    </div>
  );
}

function TooltipsExample(): JSX.Element {
  return (
    <div className="flex gap-2">
      <Tooltip content="Tooltip content" placement="top">
        <Button>Tooltip top</Button>
      </Tooltip>
      <Tooltip content="Tooltip content" placement="right">
        <Button>Tooltip right</Button>
      </Tooltip>
      <Tooltip content="Tooltip content" placement="bottom">
        <Button>Tooltip bottom</Button>
      </Tooltip>
      <Tooltip content="Tooltip content" placement="left">
        <Button>Tooltip left</Button>
      </Tooltip>
    </div>
  );
}
