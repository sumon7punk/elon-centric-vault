import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { GraduationCap, Home, Heart, Lightbulb } from "lucide-react";

export const BiographySection = () => {
  return (
    <section id="biography" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Early Life & Education</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            The foundation years that shaped one of the world's most influential entrepreneurs
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {/* Childhood & Family */}
          <Card className="shadow-card hover:shadow-elegant transition-smooth">
            <CardHeader>
              <CardTitle className="flex items-center gap-3">
                <Home className="h-6 w-6 text-primary" />
                Childhood & Family Background
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p>
                Elon Reeve Musk was born on June 28, 1971, in Pretoria, South Africa, to Maye Musk 
                (née Haldeman), a model and dietitian from Regina, Saskatchewan, Canada, and Errol Musk, 
                a South African electromechanical engineer, pilot, sailor, consultant, and property developer.
              </p>
              <p>
                He has two younger siblings: brother Kimbal (born 1972) and sister Tosca (born 1974). 
                His maternal grandfather, Joshua Haldeman, was an American-born Canadian, and his 
                maternal grandmother was British.
              </p>
              <p>
                Musk's parents divorced when he was ten years old, and he lived primarily with his father. 
                He later described his childhood as difficult, stating that he was severely bullied at school 
                and had a complicated relationship with his father.
              </p>
              <div className="bg-muted/30 p-4 rounded-lg">
                <h4 className="font-semibold mb-2">Early Interests</h4>
                <ul className="space-y-1 text-sm">
                  <li>• Developed interest in computing and video games at age 10</li>
                  <li>• Taught himself computer programming</li>
                  <li>• Created and sold his first video game "Blastar" at age 12</li>
                  <li>• Voracious reader, often reading 10+ hours per day</li>
                </ul>
              </div>
            </CardContent>
          </Card>

          {/* Education Journey */}
          <Card className="shadow-card hover:shadow-elegant transition-smooth">
            <CardHeader>
              <CardTitle className="flex items-center gap-3">
                <GraduationCap className="h-6 w-6 text-primary" />
                Education History
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-4">
                <div className="border-l-4 border-primary pl-4">
                  <h4 className="font-semibold">Waterkloof House Preparatory School</h4>
                  <p className="text-sm text-muted-foreground">Primary education in Pretoria</p>
                </div>
                
                <div className="border-l-4 border-primary pl-4">
                  <h4 className="font-semibold">Bryanston High School</h4>
                  <p className="text-sm text-muted-foreground">Brief period before transferring</p>
                </div>
                
                <div className="border-l-4 border-primary pl-4">
                  <h4 className="font-semibold">Pretoria Boys High School</h4>
                  <p className="text-sm text-muted-foreground">Graduated in 1988</p>
                </div>
                
                <div className="border-l-4 border-primary pl-4">
                  <h4 className="font-semibold">Queen's University (1989-1991)</h4>
                  <p className="text-sm text-muted-foreground">Kingston, Ontario, Canada - Physics and Economics</p>
                </div>
                
                <div className="border-l-4 border-primary pl-4">
                  <h4 className="font-semibold">University of Pennsylvania (1991-1997)</h4>
                  <p className="text-sm text-muted-foreground">
                    Bachelor's in Economics (Wharton School) and Bachelor's in Physics
                  </p>
                </div>
                
                <div className="border-l-4 border-accent pl-4">
                  <h4 className="font-semibold">Stanford University (1995)</h4>
                  <p className="text-sm text-muted-foreground">
                    PhD in Energy Physics - Left after 2 days to start Zip2
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Influences & Inspirations */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <Card className="shadow-card hover:shadow-elegant transition-smooth">
            <CardHeader>
              <CardTitle className="flex items-center gap-3">
                <Lightbulb className="h-6 w-6 text-primary" />
                Early Influences & Inspirations
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p>
                From a young age, Musk was deeply influenced by science fiction and the possibilities 
                of technology. His voracious reading habit exposed him to works by Isaac Asimov, 
                Robert Heinlein, and Douglas Adams, which shaped his vision of the future.
              </p>
              <div className="space-y-3">
                <div>
                  <h4 className="font-semibold">Literary Influences</h4>
                  <p className="text-sm text-muted-foreground">
                    "The Hitchhiker's Guide to the Galaxy" by Douglas Adams particularly resonated with him, 
                    teaching him that the important thing is to ask the right questions.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold">Technological Pioneers</h4>
                  <p className="text-sm text-muted-foreground">
                    Inspired by inventors like Nikola Tesla and Thomas Edison, as well as 
                    rocket pioneer Wernher von Braun.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="shadow-card hover:shadow-elegant transition-smooth">
            <CardHeader>
              <CardTitle className="flex items-center gap-3">
                <Heart className="h-6 w-6 text-primary" />
                Personal Characteristics
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p>
                Even as a child, Musk displayed characteristics that would later define his 
                entrepreneurial success: intense curiosity, determination, and an ability to 
                think from first principles.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-muted/30 p-3 rounded-lg">
                  <h4 className="font-semibold text-sm">Traits</h4>
                  <ul className="text-xs mt-2 space-y-1">
                    <li>• Intense work ethic</li>
                    <li>• Photographic memory</li>
                    <li>• Problem-solving mindset</li>
                    <li>• Risk-taking propensity</li>
                  </ul>
                </div>
                <div className="bg-muted/30 p-3 rounded-lg">
                  <h4 className="font-semibold text-sm">Challenges</h4>
                  <ul className="text-xs mt-2 space-y-1">
                    <li>• School bullying</li>
                    <li>• Family difficulties</li>
                    <li>• Social awkwardness</li>
                    <li>• Perfectionist tendencies</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};