const Home = () => {
  // .head_text is defined in the global.css. all the "_" class is from the global.css
  return (
    <section class='w-full flex-center flex-col'>
      <h1 className='head_text text-center'>
        Discover & Share <br class='max-md:hidden' />
        <span class='orange_gradient text-center'>AI-Powered Prompts</span>
      </h1>
      <p class='desc text-center'>
        Promptopia is an open-source AI prompting tool for modern world to
        discover, create and share creative prompts
      </p>

      {/* Feed */}
    </section>
  );
};

export default Home;
