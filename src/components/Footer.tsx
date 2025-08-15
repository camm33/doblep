import { Separator } from "@/components/ui/separator";

const Footer = () => {
  return (
    <footer className="bg-card border-t">
      <div className="container py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="h-8 w-8 rounded bg-primary flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-sm">T</span>
              </div>
              <span className="font-bold text-xl">Thrift</span>
            </div>
            <p className="text-muted-foreground text-sm">
              Sustainable fashion marketplace for buying and selling pre-loved clothing.
            </p>
          </div>

          {/* Shop */}
          <div className="space-y-4">
            <h3 className="font-semibold">Shop</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="#" className="hover:text-foreground transition-colors">Women</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">Men</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">Accessories</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">Shoes</a></li>
            </ul>
          </div>

          {/* Sell */}
          <div className="space-y-4">
            <h3 className="font-semibold">Sell</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="#" className="hover:text-foreground transition-colors">Start Selling</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">Seller Guide</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">Fees</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">Shipping</a></li>
            </ul>
          </div>

          {/* Support */}
          <div className="space-y-4">
            <h3 className="font-semibold">Support</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="#" className="hover:text-foreground transition-colors">Help Center</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">Contact Us</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">Returns</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">Size Guide</a></li>
            </ul>
          </div>
        </div>

        <Separator className="my-8" />

        <div className="flex flex-col md:flex-row justify-between items-center text-sm text-muted-foreground">
          <p>&copy; 2024 Thrift. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-foreground transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-foreground transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-foreground transition-colors">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;